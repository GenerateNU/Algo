package services

import (
	"backend/src/models"

	"gorm.io/gorm"
)

type GoalService struct {
	DB *gorm.DB
}

func NewGoalService(db *gorm.DB) *GoalService {
	return &GoalService{
		DB: db,
	}
}

func (os *GoalService) GetShortTermGoals() ([]models.ShortTermGoal, error) {
	var shortTermGoals []models.ShortTermGoal
	if err := os.DB.Find(&shortTermGoals).Error; err != nil {
		return nil, err
	}
	return shortTermGoals, nil
}

func (os *GoalService) GetLongTermGoals() ([]models.LongTermGoal, error) {
	var longTermGoals []models.LongTermGoal
	if err := os.DB.Find(&longTermGoals).Error; err != nil {
		return nil, err
	}
	return longTermGoals, nil
}
