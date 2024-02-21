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

func (us *UserService) Authenticate() error {
	return nil
}
