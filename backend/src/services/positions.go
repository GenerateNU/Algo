package services

import (
	"backend/src/models"

	"gorm.io/gorm"
)

type PositionService struct {
	DB *gorm.DB
}

func NewPositionService(db *gorm.DB) *PositionService {
	return &PositionService{
		DB: db,
	}
}

func (os *PositionService) CreatePosition(currentUserPortfolioID int, position models.Position) ([]models.Position, error) {
	position.UserPortfolioID = currentUserPortfolioID
	err := os.DB.Create(&position).Error
	if err != nil {
	    return nil, err
	}

	return []models.Position{position}, nil
}

func (os *PositionService) GetPositions(currentUserPortfolioID int) ([]models.Position, error) {
	var positions []models.Position
	err := os.DB.Where("user_portfolio_id = ?", currentUserPortfolioID).Find(&positions).Error
	if err != nil {
		return nil, err
	}

	return positions, nil
}