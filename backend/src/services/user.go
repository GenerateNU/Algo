package services

import (
	"backend/src/models"

	"gorm.io/gorm"

	"errors"
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

func (us *UserService) CreateLongTermGoalForUser(userID uint, longTermGoal string) (models.UserLongTermGoal, error) {
    goal := models.UserLongTermGoal{
        UserID:       userID,
        LongTermGoal: longTermGoal,
    }

    if err := us.DB.Create(&goal).Error; err != nil {
        return models.UserLongTermGoal{}, err
    }

    return goal, nil
}

func (us *UserService) GetLongTermGoalsForUser(userID uint) ([]models.UserLongTermGoal, error) {
    var userLongTermGoals []models.UserLongTermGoal
    if err := us.DB.Where("user_id = ?", userID).Find(&userLongTermGoals).Error; err != nil {
        return nil, err
    }
    return userLongTermGoals, nil
}

func (us *UserService) UpdateLongTermGoalForUser(userID uint, goalID uint, longTermGoal string) (models.UserLongTermGoals, error) {
    var userLongTermGoal models.UserLongTermGoals
    if err := us.DB.First(&userLongTermGoal, goalID).Error; err != nil {
        return models.UserLongTermGoals{}, err
    }

    if userLongTermGoal.UserID != userID {
        return models.UserLongTermGoals{}, errors.New("User does not have permission to update this goal")
    }

    userLongTermGoal.LongTermGoal = models.LongTermGoal(longTermGoal)
    if err := us.DB.Save(&userLongTermGoal).Error; err != nil {
        return models.UserLongTermGoals{}, err
    }

    return userLongTermGoal, nil
}

func (us *UserService) DeleteLongTermGoalForUser(userID uint, goalID uint) error {
    var userLongTermGoal models.UserLongTermGoals
    if err := us.DB.First(&userLongTermGoal, goalID).Error; err != nil {
        return err
    }

    if userLongTermGoal.UserID != userID {
        return errors.New("User does not have permission to delete this goal")
    }

    if err := us.DB.Delete(&userLongTermGoal).Error; err != nil {
        return err
    }

    return nil
}