package models

import "backend/src/types"

type UserOAuth struct {
	types.Model
	UserID     string `json:"user_id" validate:"required"`
	OAuthToken string `gorm:"type:varchar(255);" json:"oauth_consumer_key" validate:"required"`
	OAuth      string `gorm:"type:varchar(255);" json:"oauth_timestamp" validate:"required"`
}
