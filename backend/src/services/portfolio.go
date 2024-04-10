package services

import (
	"backend/src/models"

	"gorm.io/gorm"
)

type PortfolioService struct {
	DB *gorm.DB
}

func NewPortfolioService(db *gorm.DB) *PortfolioService {
	return &PortfolioService{
		DB: db,
	}
}

func (os *PortfolioService) CopyPortfolio(targetUserID, currentUserID int) ([]models.ShortTermPortfolio, error) {
	var portfolio []models.Portfolio
	if err := os.DB.Where("user_id = ?", currentUserID).Find(&portfolio).Error; err != nil {
		return nil, err
	}
	return portfolio, nil
}

func (os *PortfolioService) GetPortfolio(userID int) ([]models.Portfolio, error) {
	var portfolio []models.Portfolio
	if err := os.DB.Where("user_id = ?", userID).Find(&portfolio).Error; err != nil {
		return nil, err
	}
	return portfolio, nil
}