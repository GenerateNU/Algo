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

// CopyPortfolio copies the positions from the target portfolio into the current user's portfolio.
func (os *PortfolioService) CopyPortfolio(currentUserPortfolio models.UserPortfolio, targetPortfolio models.UserPortfolio) (models.UserPortfolio, error) {
	// get the positions from the target portfolio
	var newPositions []models.Position
	targetPositions := targetPortfolio.Positions
	for _, position := range targetPositions {
		newPosition := models.Position{
			UserPortfolioID: currentUserPortfolio.ID,
			PositionID:      position.PositionID,
			Ticker:          position.Ticker,
			Quantity:        position.Quantity,
			Cost:            position.Cost,
			DayGain:         position.DayGain,
			DayGainPct:      position.DayGainPct,
			TotalGain:       position.TotalGain,
			TotalGainPct:    position.TotalGainPct,
			Type:            position.Type,
		}
		newPositions = append(newPositions, newPosition)
	}

	// create the new positions in the current user's portfolio
	err := os.DB.Transaction(func(tx *gorm.DB) error {
		for _, position := range newPositions {
			if err := tx.Create(&position).Error; err != nil {
				return err
			}
		}
		return nil
	})

	if err != nil {
		return models.UserPortfolio{}, err
	}

	// update the currentUserPortfolio with the new positions
	currentUserPortfolio.Positions = newPositions

	return currentUserPortfolio, nil
}

// GetUserPortfolio gets the user's portfolio by user ID.
func (os *PortfolioService) GetUserPortfolio(userID string) (*models.UserPortfolio, error) {
	var portfolio models.UserPortfolio
	err := os.DB.Preload("Positions").Where("user_id = ?", userID).First(&portfolio).Error
	if err != nil {
		return nil, err
	}
	return &portfolio, nil
}
