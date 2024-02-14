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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

func (us *UserService) CreateLongTermGoalForUser(userID uint, longTermGoalID uint) (models.UserLongTermGoals, error) {
	goal := models.UserLongTermGoals{
		UserID:         userID,
		LongTermGoalID: longTermGoalID,
	}

	if err := us.DB.Create(&goal).Error; err != nil {
		return models.UserLongTermGoals{}, err
	}

	return goal, nil
}

func (us *UserService) GetLongTermGoalsForUser(userID uint) ([]models.UserLongTermGoals, error) {
	var userLongTermGoals []models.UserLongTermGoals
	if err := us.DB.Preload("User").Preload("LongTermGoal").Where("user_id = ?", userID).Find(&userLongTermGoals).Error; err != nil {
		return nil, err
	}
	return userLongTermGoals, nil
}

func (us *UserService) UpdateLongTermGoalForUser(userID uint, goalID uint, longTermGoalID uint) (models.UserLongTermGoals, error) {
	var userLongTermGoal models.UserLongTermGoals
	if err := us.DB.First(&userLongTermGoal, goalID).Error; err != nil {
		return models.UserLongTermGoals{}, err
	}

	if userLongTermGoal.UserID != userID {
		return models.UserLongTermGoals{}, errors.New("User does not have permission to update this goal")
	}

	if err := us.DB.Save(&longTermGoalID).Error; err != nil {
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

func (us *UserService) CreateShortTermGoalForUser(userID uint, shortTermGoalID uint) (models.UserShortTermGoals, error) {
	goal := models.UserShortTermGoals{
		UserID:         userID,
		ShortTermGoalID: shortTermGoalID,
	}

	if err := us.DB.Create(&goal).Error; err != nil {
		return models.UserShortTermGoals{}, err
	}

	return goal, nil
}

func (us *UserService) GetShortTermGoalsForUser(userID uint) ([]models.UserShortTermGoals, error) {
	var userShortTermGoals []models.UserShortTermGoals
	if err := us.DB.Preload("User").Preload("ShortTermGoal").Where("user_id = ?", userID).Find(&userShortTermGoals).Error; err != nil {
		return nil, err
	}
	return userShortTermGoals, nil
}

func (us *UserService) UpdateShortTermGoalForUser(userID uint, goalID uint, shortTermGoalID uint) (models.UserShortTermGoals, error) {
	var userShortTermGoal models.UserShortTermGoals
	if err := us.DB.First(&userShortTermGoal, goalID).Error; err != nil {
		return models.UserShortTermGoals{}, err
	}

	if userShortTermGoal.UserID != userID {
		return models.UserShortTermGoals{}, errors.New("User does not have permission to update this goal")
	}

	if err := us.DB.Save(&shortTermGoalID).Error; err != nil {
		return models.UserShortTermGoals{}, err
	}

	return userShortTermGoal, nil
}

func (us *UserService) DeleteShortTermGoalForUser(userID uint, goalID uint) error {
	var userShortTermGoal models.UserShortTermGoals
	if err := us.DB.First(&userShortTermGoal, goalID).Error; err != nil {
		return err
	}

	if userShortTermGoal.UserID != userID {
		return errors.New("User does not have permission to delete this goal")
	}

	if err := us.DB.Delete(&userShortTermGoal).Error; err != nil {
		return err
	}

	return nil
}