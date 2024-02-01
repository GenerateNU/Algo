package services

import (
	"backend/src/models"
	"fmt"
	"github.com/dghubble/oauth1"
	"gorm.io/gorm"
	"os"
)

const EtradeApiBase = "https://api.etrade.com"

var AuthorizeEndpoint = oauth1.Endpoint{
	RequestTokenURL: "https://api.etrade.com/oauth/request_token",
	AuthorizeURL:    "https://us.etrade.com/e/t/etws/authorize",
	AccessTokenURL:  "https://api.etrade.com/oauth/access_token",
}

var OAuthConfig = oauth1.Config{
	ConsumerKey:    os.Getenv("OAUTH_KEY"),
	ConsumerSecret: os.Getenv("OAUTH_SECRET"),
	CallbackURL:    "oob",
	Endpoint:       AuthorizeEndpoint,
}

type ETradeService struct {
	DB *gorm.DB
}

func NewETradeService(db *gorm.DB) *ETradeService {
	return &ETradeService{
		DB: db,
	}
}

// GetETradeRedirectURL gets a requestToken and uses it to retrieve a redirect URL from the E*Trade API
func (s *ETradeService) GetETradeRedirectURL(userID int) (string, error) {
	requestToken, requestSecret, err := OAuthConfig.RequestToken()
	if err != nil {
		return "", fmt.Errorf("error retrieving request token: %v", err)
	}

	err = s.insertOAuthReqTokens(userID, requestToken, requestSecret)
	if err != nil {
		return "", fmt.Errorf("error inserting oauth token row: %v", err)
	}

	authorizationURL, err := OAuthConfig.AuthorizationURL(requestToken)
	if err != nil {
		return "", fmt.Errorf("error creating authroization url: %v", err)
	}

	return authorizationURL.String(), nil
}

// insertOAuthReqTokens stores the requestToken and requestSecret in the db for use in GetAccessToken
func (s *ETradeService) insertOAuthReqTokens(userID int, requestToken, requestSecret string) error {
	oauthTokens := models.OAuthTokens{
		UserID:        userID,
		RequestToken:  requestToken,
		RequestSecret: requestSecret,
	}
	tx := s.DB.Create(&oauthTokens)
	return tx.Error
}

// GetAccessToken gets an access token and secret using the oauth verifier and request token and secret
func (s *ETradeService) GetAccessToken(userID int, verifier string) error {
	oauthTokens, err := s.getOAuthReqTokens(userID)
	if err != nil {
		return fmt.Errorf("error getting db tokens: %v", err)
	}

	accessToken, accessSecret, err := OAuthConfig.AccessToken(
		oauthTokens.RequestToken, oauthTokens.RequestSecret, verifier,
	)
	if err != nil {
		return fmt.Errorf("error getting access token: %v", err)
	}

	// save the access token and secret to the db
	oauthTokens.AccessToken = accessToken
	oauthTokens.AccessSecret = accessSecret
	s.DB.Save(&oauthTokens)

	return nil
}

// getOAuthReqTokens retrieves the latest request token and secret for the given user
func (s *ETradeService) getOAuthReqTokens(userID int) (*models.OAuthTokens, error) {
	var oauthTokens = models.OAuthTokens{UserID: userID}
	tx := s.DB.Order("created_at desc").First(&oauthTokens)
	if tx.Error != nil {
		return nil, tx.Error
	}

	return &oauthTokens, nil
}
