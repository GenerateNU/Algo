package services

import (
	"backend/src/models"
	"gorm.io/gorm"
)

type TrendingUserService struct {
	DB *gorm.DB
}

func NewTrendingUserService(db *gorm.DB) *TrendingUserService {
	return &TrendingUserService{
		DB: db,
	}
}

func (tre *TrendingUserService) GetTrendingUsers() ([]models.TrendingUser, error) {

	var trending []models.TrendingUser

	if err := tre.DB.Table("user_portfolios").
		Preload("TrendingUserReference").
		Select("user_id, day_gain_pct").
		Order("day_gain_pct DESC").
		Limit(10).
		Find(&trending).Error; err != nil {
		return nil, err
	}

	return trending, nil
}
