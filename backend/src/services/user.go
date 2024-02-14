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

func (us *UserService) CreateUser(user *models.User) (*models.User, error) {
	if err := us.DB.Create(user).Error; err != nil {
		return nil, err
	}
	return user, nil
}

func (us *UserService) GetUserById(id uint) (*models.User, error) {
	user := &models.User{}
	if err := us.DB.First(user, id).Error; err != nil {
		return nil, err
	}
	return user, nil
}

func (us *UserService) UpdateUserById(id uint, user *models.User) (*models.User, error) {
	// Retrieve the existing user from the database
	_, err := us.GetUserById(id)
	if err != nil {
		return nil, err
	}

	// Save the updated user back to the database
	if err := us.DB.Save(user).Error; err != nil {
		return nil, err
	}

	return user, nil
}

func (us *UserService) DeleteUserById(id uint) (*models.User, error) {
	user := &models.User{}
	if err := us.DB.Delete(user, id).Error; err != nil {
		return nil, err
	}
	return user, nil
}
