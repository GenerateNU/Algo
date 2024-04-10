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

func (os *PortfolioService) CopyPortfolio(targetPositions []models.Position, currentUserID int) ([]models.Position, error) {
	// given a list of positions, copy them to the current user's portfolio
	var newPositions []models.Position
	for _, position := range targetPositions {
		newPosition := models.Position{
			UserPortfolioID: currentUserID,
			PositionID: position.PositionID,
			Ticker: position.Ticker,
			Quantity: position.Quantity,
			Cost: position.Cost,
			DayGain: position.DayGain,
			DayGainPct: position.DayGainPct,
			TotalGain: position.TotalGain,
			TotalGainPct: position.TotalGainPct,
			Type: position.Type,
		}
		newPositions = append(newPositions, newPosition)
	}
	result := os.DB.Create(&newPositions)
	if result.Error != nil {
		return nil, result.Error
	}
	
	return result, nil
}

func (os *PortfolioService) GetPositions(portfolioID int) ([]models.Position, error) {
	var positions []models.Position
	result := os.DB.Where("portfolio_id = ?", portfolioID).Find(&positions)
	if result.Error != nil {
		return nil, result.Error
	}
	return positions, nil
}