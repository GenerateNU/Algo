package services

import (
	// "backend/src/models"
	// "errors"

	"gorm.io/gorm"
)

type AuthService struct {
	DB *gorm.DB
}

func NewAuthService(db *gorm.DB) *AuthService {
	return &AuthService{
		DB: db,
	}
}

func (as *AuthService) Register() error {

	return nil
}

func (as *AuthService) Authenticate() error {

	return nil
}
