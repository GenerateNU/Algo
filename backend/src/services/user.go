package services

import (
	"backend/src/models"

	"gorm.io/gorm"
)

type UserService struct {
	DB *gorm.DB
}

func NewUserService(db *gorm.DB) *UserService {
	return &UserService{
		DB: db,
	}
}

func (us *UserService) GetAllUsers() ([]models.User, error) {
	var users []models.User
	if err := us.DB.Find(&users).Error; err != nil {
		return nil, err
	}
	return users, nil
}
