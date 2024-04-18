package services

import (
	"backend/src/models"
	"backend/src/types"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"os"
	"time"

	"github.com/gomodule/oauth1/oauth"
	"gorm.io/gorm"
)

const APIEnv = "apisb" // "apisb" = SANDBOX, "api" = PROD

var oauthClient = oauth.Client{
	Credentials: oauth.Credentials{
		Token:  os.Getenv("OAUTH_KEY"),
		Secret: os.Getenv("OAUTH_SECRET"),
	},
	TemporaryCredentialRequestURI: fmt.Sprintf("https://%s.etrade.com/oauth/request_token", APIEnv),
	ResourceOwnerAuthorizationURI: "https://us.etrade.com/e/t/etws/authorize",
	TokenRequestURI:               fmt.Sprintf("https://%s.etrade.com/oauth/access_token", APIEnv),
	SignatureMethod:               oauth.HMACSHA1,
}

type ETradeService struct {
	DB *gorm.DB
}

func NewETradeService(db *gorm.DB) *ETradeService {
	return &ETradeService{
		DB: db,
	}
}

// GetETradeRedirectURL gets a requestToken and uses it to retrieve a redirect URL from the etrade API
func (s *ETradeService) GetETradeRedirectURL(userID string) (string, error) {
	err := s.clearOAuthTokens(userID)
	if err != nil {
		return "", fmt.Errorf("error clearing user tokens: %v", err)
	}

	tempCred, err := oauthClient.RequestTemporaryCredentials(nil, "oob", nil)
	if err != nil {
		return "", fmt.Errorf("error requesting temp creds: %v", err)
	}

	err = s.insertOAuthReqTokens(userID, tempCred.Token, tempCred.Secret)
	if err != nil {
		return "", fmt.Errorf("error inserting oauth token row: %v", err)
	}

	// can't use oauth lib as etrade requires a custom param names (etrade devs are too cool to follow the RFC)
	redirectURL := fmt.Sprintf(
		"%s?key=%s&token=%s", oauthClient.ResourceOwnerAuthorizationURI, oauthClient.Credentials.Token, tempCred.Token,
	)

	return redirectURL, nil
}

// clearOAuthTokens clears all the oauth tokens associated with a user when a new redirect URL is created
func (s *ETradeService) clearOAuthTokens(userID string) error {
	tx := s.DB.Where("user_id = ?", userID).Delete(&models.OAuthTokens{})
	return tx.Error
}

// insertOAuthReqTokens stores the requestToken and requestSecret in the db for use in GetAccessToken
func (s *ETradeService) insertOAuthReqTokens(userID string, requestToken, requestSecret string) error {
	oauthTokens := models.OAuthTokens{
		UserID:        userID,
		RequestToken:  requestToken,
		RequestSecret: requestSecret,
	}
	tx := s.DB.Create(&oauthTokens)
	return tx.Error
}

// GetAccessToken gets an access token and secret using the oauth verifier and request token and secret
func (s *ETradeService) GetAccessToken(userID string, verifier string) error {
	oauthTokens, err := s.getLastOAuthTokens(userID)
	if err != nil {
		return fmt.Errorf("error getting db tokens: %v", err)
	}

	tokens, _, err := oauthClient.RequestToken(
		nil, &oauth.Credentials{
			Token:  oauthTokens.RequestToken,
			Secret: oauthTokens.RequestSecret,
		},
		verifier,
	)
	if err != nil {
		return fmt.Errorf("error getting access token: %v", err)
	}

	// save the access token and secret to the db
	oauthTokens.AccessToken = tokens.Token
	oauthTokens.AccessSecret = tokens.Secret
	s.DB.Where("user_id = ?", userID).Save(&oauthTokens)

	return nil
}

// getLastOAuthTokens retrieves the oauth token row for the given user
func (s *ETradeService) getLastOAuthTokens(userID string) (*models.OAuthTokens, error) {
	var oauthTokens = models.OAuthTokens{UserID: userID}
	tx := s.DB.First(&oauthTokens)
	if tx.Error != nil {
		return nil, tx.Error
	}

	return &oauthTokens, nil
}

// GetAccessTokenStatus returns the status of the OAuth token based on
// its presence in the db and creation datetime
func (s *ETradeService) GetAccessTokenStatus(userID string) (string, error) {
	oauthTokens, err := s.getLastOAuthTokens(userID)
	if err != nil {
		return "inactive", nil
	}

	today := time.Now().UTC().Day()
	twoHoursAgo := time.Now().UTC().Add(-2 * time.Hour)

	if oauthTokens.AccessToken != "" &&
		oauthTokens.AccessSecret != "" &&
		!oauthTokens.UpdatedAt.Before(twoHoursAgo) &&
		oauthTokens.UpdatedAt.Day() == today {
		return "active", nil
	}

	return "inactive", nil
}

// SyncPortfolio fetches the portfolio data for each account
// inserts new trades, updates existing, and deletes ones not returned from ETrade
func (s *ETradeService) SyncPortfolio(userID string) (models.UserPortfolio, error) {
	oauthTokens, err := s.getLastOAuthTokens(userID)
	if err != nil {
		return models.UserPortfolio{}, fmt.Errorf("error getting oauth token: %s", err)
	}

	client := newJSONClient()

	accounts, err := getETradeAccounts(client, oauthTokens)
	if err != nil {
		return models.UserPortfolio{}, fmt.Errorf("error getting etrade accounts: %s", err)
	}

	visitedAccounts := make(map[string]bool)
	var positions []models.Position

	var dbPortfolio models.UserPortfolio
	if err := s.DB.Where("user_id = ?", userID).FirstOrCreate(
		&dbPortfolio, models.UserPortfolio{UserID: userID},
	).Error; err != nil {
		return models.UserPortfolio{}, fmt.Errorf("error retrieving portfolio from the database: %s", err)
	}

	// Retrieve current positions from the database
	var dbPositions []models.Position
	if err := s.DB.Where("user_portfolio_id = ?", dbPortfolio.ID).Find(&dbPositions).Error; err != nil {
		return models.UserPortfolio{}, fmt.Errorf("error retrieving positions from the database: %s", err)
	}

	// Map to store existing positions for quick lookup
	existingPositions := make(map[int]models.Position)
	for _, pos := range dbPositions {
		existingPositions[pos.PositionID] = pos
	}

	var totalGain, totalDayGain float64
	var totalPortfolioValue float64
	var portfolioList []types.AccountPortfolio
	// Iterate over portfolioList to update, add, and delete positions
	for _, account := range accounts {
		portfolioList, err = getETradePortfolio(client, oauthTokens, account.AccountIDKey)
		if err != nil {
			return models.UserPortfolio{}, fmt.Errorf("error getting portfolio: %s", err)
		}

		for _, portfolio := range portfolioList {
			if visitedAccounts[portfolio.AccountID] {
				continue
			}
			visitedAccounts[portfolio.AccountID] = true
			for _, position := range portfolio.PositionList {
				var positionValue float64
				if position.PositionType == "SHORT" {
					// For short positions, subtract the gains from the total gains
					totalGain -= position.TotalGain
					totalDayGain -= position.DaysGain
					positionValue = float64(position.Quantity) * position.CostPerShare * -1 // Negate the position value for short positions
				} else {
					// For long positions, add the gains to the total gains
					totalGain += position.TotalGain
					totalDayGain += position.DaysGain
					positionValue = float64(position.Quantity) * position.CostPerShare
				}
				totalPortfolioValue += positionValue
				// Update existing position or add new position
				if existingPos, ok := existingPositions[position.PositionID]; ok {
					existingPos.Ticker = position.SymbolDescription
					existingPos.Quantity = position.Quantity
					existingPos.Cost = position.CostPerShare
					existingPos.DayGain = position.DaysGain
					existingPos.DayGainPct = position.DaysGainPct
					existingPos.TotalGain = position.TotalGain
					existingPos.TotalGainPct = position.TotalGainPct
					existingPos.Type = models.TradeType(position.PositionType)
					// Save updates to the database
					if err := s.DB.Save(&existingPos).Error; err != nil {
						return models.UserPortfolio{}, fmt.Errorf("error updating position: %s", err)
					}
					delete(existingPositions, position.PositionID) // Remove from existing positions map
				} else {
					// Add new position
					positions = append(
						positions, models.Position{
							UserPortfolioID: dbPortfolio.ID,
							PositionID:      position.PositionID,
							Ticker:          position.SymbolDescription,
							Quantity:        position.Quantity,
							Cost:            position.CostPerShare,
							DayGain:         position.DaysGain,
							DayGainPct:      position.DaysGainPct,
							TotalGain:       position.TotalGain,
							TotalGainPct:    position.TotalGainPct,
							Type:            models.TradeType(position.PositionType),
						},
					)
				}
			}
		}
	}

	var dayGainPct, totalGainPct float64
	if totalPortfolioValue != 0 {
		dayGainPct = (totalDayGain / totalPortfolioValue) * 100
		totalGainPct = (totalGain / totalPortfolioValue) * 100
	}

	dbPortfolio.TotalGain = totalGain
	dbPortfolio.TotalGainPct = totalGainPct
	dbPortfolio.DayGain = totalDayGain
	dbPortfolio.DayGainPct = dayGainPct

	if err := s.DB.Save(&dbPortfolio).Error; err != nil {
		return models.UserPortfolio{}, fmt.Errorf("error updating portfolio: %s", err)
	}

	// Delete positions that are not present in the current data set
	for _, pos := range existingPositions {
		if err := s.DB.Delete(&pos).Error; err != nil {
			return models.UserPortfolio{}, fmt.Errorf("error deleting position: %s", err)
		}
	}

	tx := s.DB.CreateInBatches(&positions, 10)
	if tx.Error != nil {
		return models.UserPortfolio{}, fmt.Errorf("error creating positions: %s", tx.Error.Error())
	}

	return s.GetUserPortfolio(userID)
}

// getETradeAccounts requests and unmarshals the user's accounts from the E*Trade API
func getETradeAccounts(client *http.Client, tokens *models.OAuthTokens) (types.AccountList, error) {
	resp, err := oauthClient.Get(
		client, &oauth.Credentials{
			Token:  tokens.AccessToken,
			Secret: tokens.AccessSecret,
		}, fmt.Sprintf("https://%s.etrade.com/v1/accounts/list", APIEnv), nil,
	)
	if err != nil {
		return types.AccountList{}, fmt.Errorf("error retreiving /accounts/list: %s", err)
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return types.AccountList{}, fmt.Errorf("error reading body: %s", err)
	}

	var accounts types.AccountListResponse
	err = json.Unmarshal(body, &accounts)
	if err != nil {
		return types.AccountList{}, fmt.Errorf("error parsing json: %s", err)
	}

	return accounts.AccountListResponse.Accounts.AccountList, nil
}

// getETradePortfolio requests and unmarshals the user's portfolio from the E*Trade API for a given account
func getETradePortfolio(client *http.Client, tokens *models.OAuthTokens, accountID string) ([]types.AccountPortfolio, error) {
	resp, err := oauthClient.Get(
		client, &oauth.Credentials{
			Token:  tokens.AccessToken,
			Secret: tokens.AccessSecret,
		}, fmt.Sprintf("https://%s.etrade.com/v1/accounts/%s/portfolio", APIEnv, accountID), nil,
	)
	if err != nil {
		return []types.AccountPortfolio{}, fmt.Errorf("error retreiving /accounts/portfolio: %s", err)
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return []types.AccountPortfolio{}, fmt.Errorf("error reading body: %s", err)
	}

	var portfolio types.PortfolioResponse
	err = json.Unmarshal(body, &portfolio)
	if err != nil {
		return []types.AccountPortfolio{}, fmt.Errorf("error parsing json: %s", err)
	}

	return portfolio.PortfolioResponse.AccountPortfolioList, nil
}

// GetUserPortfolio returns the user portfolio from our db
func (s *ETradeService) GetUserPortfolio(userID string) (models.UserPortfolio, error) {
	var portfolio models.UserPortfolio
	if err := s.DB.Preload("Positions").Where("user_id = ?", userID).First(&portfolio).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return models.UserPortfolio{}, nil
		}
		return models.UserPortfolio{}, fmt.Errorf("error retrieving all positions from the database: %s", err)
	}

	return portfolio, nil
}

// PlaceOrder places an order on the E*Trade API
func (s *ETradeService) PlaceOrder(userID string, order types.Order) error {
	oauthTokens, err := s.getLastOAuthTokens(userID)
	if err != nil {
		return fmt.Errorf("error getting oauth token: %s", err)
	}

	client := newJSONClient()

	// Create the required order details structure
	orderDetails := types.PreviewOrderRequest{
		ClientOrderID: fmt.Sprintf("%d", time.Now().UnixMilli()), // Use unique client order ID
		Order: []types.OrderEntry{
			{
				Instrument: []types.Instrument{
					{
						Product: types.Product{
							SecurityType: order.SecurityType, // "EQ" for stocks, "OPTION" for options, etc.
							Symbol:       order.Symbol,
						},
						OrderAction:  order.Action,                           // "BUY", "SELL", etc.
						QuantityType: types.QuantityType(order.QuantityType), // "QUANTITY", "DOLLARS", etc.
						Quantity:     order.Quantity,
					},
				},
				OrderTerm:     order.OrderTerm,     // "GOOD_FOR_DAY", "IMMEDIATE_OR_CANCEL", etc.
				MarketSession: order.MarketSession, // "REGULAR", "EXTENDED_HOURS"
				PriceType:     order.PriceType,     // "MARKET", "LIMIT", etc.
				StopPrice:     order.StopPrice,     // Used for stop orders
				LimitPrice:    order.LimitPrice,    // Used for limit orders
				AllOrNone:     order.AllOrNone,     // Boolean
			},
		},
	}

	// Serialize orderDetails into JSON
	orderData, err := json.Marshal(orderDetails)
	if err != nil {
		return fmt.Errorf("error serializing order details: %s", err)
	}

	// Calculate the URL based on order preview vs. actual placement
	baseURL := fmt.Sprintf("https://%s.etrade.com/v1/accounts/%s/orders/place", APIEnv, order.AccountID)

	// Make the API call using the OAuth credentials
	orderValues, err := url.ParseQuery(string(orderData))
	if err != nil {
		return fmt.Errorf("error parsing order data: %s", err)
	}

	resp, err := oauthClient.Post(client, &oauth.Credentials{
		Token:  oauthTokens.AccessToken,
		Secret: oauthTokens.AccessSecret,
	}, baseURL, orderValues)
	if err != nil {
		return fmt.Errorf("error sending order to E*Trade: %s", err)
	}
	defer resp.Body.Close()

	// Handle potential API errors
	if resp.StatusCode >= 400 {
		body, _ := io.ReadAll(resp.Body)
		return fmt.Errorf("E*Trade API error: %s", body)
	}

	// On success, you can extract the order ID from the response for confirmation
	// or further tracking.

	return nil
}

// newJSONClient is a helper function that creates an HTTP client to interact with the E*Trade API
// not using this causes the E*Trade API to return XML instead of JSON
func newJSONClient() *http.Client {
	transport := http.DefaultTransport.(*http.Transport).Clone()
	client := &http.Client{
		Transport: transport,
	}

	client.Transport = &headerSettingTransport{
		Inner: client.Transport,
	}

	return client
}

type headerSettingTransport struct {
	Inner http.RoundTripper
}

func (t *headerSettingTransport) RoundTrip(req *http.Request) (*http.Response, error) {
	req.Header.Set("Accept", "application/json")
	return t.Inner.RoundTrip(req)
}
