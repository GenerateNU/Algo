package services

import (
	"github.com/dghubble/oauth1"
	"gorm.io/gorm"
)

const EtradeApiBase = "https://api.etrade.com"

// AuthorizeEndpoint is Twitter's OAuth 1 endpoint which uses the
// oauth/authorize AuthorizeURL redirect. Note that this requires users who
// have granted access previously, to re-grant access at AuthorizeURL.
// Prefer AuthenticateEndpoint over AuthorizeEndpoint if you are unsure.
var AuthorizeEndpoint = oauth1.Endpoint{
	RequestTokenURL: "https://api.etrade.com/oauth/request_token",
	AuthorizeURL:    "https://us.etrade.com/e/t/etws/authorize",
	AccessTokenURL:  "https://api.etrade.com/oauth/access_token",
}

var OAuthConfig = oauth1.Config{
	ConsumerKey: "",
	CallbackURL: "oob",
	Endpoint:    AuthorizeEndpoint,
}

type ETradeService struct {
	DB *gorm.DB
}

func NewETradeService(db *gorm.DB) *ETradeService {
	return &ETradeService{
		DB: db,
	}
}

func (s *ETradeService) OAuthFlow() error {
	// to continue https://github.com/dghubble/oauth1
	requestToken, requestSecret, err := OAuthConfig.RequestToken()
	if err != nil {
		return err
	}

	println(requestToken)
	println(requestSecret)

	return nil
}
