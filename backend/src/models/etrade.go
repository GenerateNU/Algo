package models

import "backend/src/types"

type OAuthTokens struct {
	types.Model
	UserID        string `gorm:"type:varchar(255);" json:"user_id" validate:"required"`
	User          User   `gorm:"foreignKey:UserID;references:ID"`
	RequestToken  string `gorm:"type:varchar(255);"`
	RequestSecret string `gorm:"type:varchar(255);"`
	AccessToken   string `gorm:"type:varchar(255);"`
	AccessSecret  string `gorm:"type:varchar(255);"`
}

func (OAuthTokens) TableName() string {
	return "oauth_tokens"
}
