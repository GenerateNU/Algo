package services

import (
	"backend/src/models"
	"fmt"
	"github.com/gomodule/oauth1/oauth"
	"gorm.io/gorm"
	"os"
	"time"
)

var oauthClient = oauth.Client{
	Credentials: oauth.Credentials{
		Token:  os.Getenv("OAUTH_KEY"),
		Secret: os.Getenv("OAUTH_SECRET"),
	},
	TemporaryCredentialRequestURI: "https://apisb.etrade.com/oauth/request_token",
	ResourceOwnerAuthorizationURI: "https://us.etrade.com/e/t/etws/authorize",
	TokenRequestURI:               "https://apisb.etrade.com/oauth/access_token",
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
func (s *ETradeService) GetETradeRedirectURL(userID uint) (string, error) {
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
func (s *ETradeService) clearOAuthTokens(userID uint) error {
	tx := s.DB.Where("user_id = ?", userID).Delete(&models.OAuthTokens{})
	return tx.Error
}

// insertOAuthReqTokens stores the requestToken and requestSecret in the db for use in GetAccessToken
func (s *ETradeService) insertOAuthReqTokens(userID uint, requestToken, requestSecret string) error {
	oauthTokens := models.OAuthTokens{
		UserID:        userID,
		RequestToken:  requestToken,
		RequestSecret: requestSecret,
	}
	tx := s.DB.Create(&oauthTokens)
	return tx.Error
}

// GetAccessToken gets an access token and secret using the oauth verifier and request token and secret
func (s *ETradeService) GetAccessToken(userID uint, verifier string) error {
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
func (s *ETradeService) getLastOAuthTokens(userID uint) (*models.OAuthTokens, error) {
	var oauthTokens = models.OAuthTokens{UserID: userID}
	tx := s.DB.First(&oauthTokens)
	if tx.Error != nil {
		return nil, tx.Error
	}

	return &oauthTokens, nil
}

func (s *ETradeService) GetAccessTokenStatus(userID uint) (string, error) {
	oauthTokens, err := s.getLastOAuthTokens(userID)
	if err != nil {
		return "", fmt.Errorf("error getting db tokens: %v", err)
	}

	twoHoursAgo := time.Now().Add(-2 * time.Hour)
	today := time.Now().Day()

	if oauthTokens.AccessToken != "" &&
		oauthTokens.AccessSecret != "" &&
		oauthTokens.UpdatedAt.Before(twoHoursAgo) &&
		oauthTokens.UpdatedAt.Day() == today {
		return "active", nil
	}
	return "inactive", nil
}
