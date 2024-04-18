package services

import (
	"backend/src/models"
	"fmt"

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
	var updatedPositions []models.Position
	targetPositions := targetPortfolio.Positions
	for _, position := range targetPositions {
		// check if position exists in currentUserPortfolio.positions (matching by position.Ticker)
		positionExists := false
		var matchingPosition models.Position
		for i, p := range currentUserPortfolio.Positions {
			if p.Ticker == position.Ticker {
				positionExists = true
				matchingPosition = currentUserPortfolio.Positions[i]
				break
			}
		}

		// if position exists, update the quantity -> skip to next position
		if positionExists {
			fmt.Println("position exists", matchingPosition.Ticker, matchingPosition.Quantity, position.Quantity)
			matchingPosition.Quantity += position.Quantity
			updatedPositions = append(updatedPositions, matchingPosition)
			fmt.Println("position exists after", matchingPosition.Ticker, matchingPosition.Quantity, position.Quantity)
			continue
		}

		// if position doesn't already exist, copy the position
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

	// update the positions that were already in the current user's portfolio
	err = os.DB.Transaction(func(tx *gorm.DB) error {
		for _, position := range updatedPositions {
			if err := tx.Save(&position).Error; err != nil {
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

// CreateUserPortfolio creates a new portfolio for the user.
func (os *PortfolioService) CreateUserPortfolio(userID string, portfolio *models.UserPortfolio) (*models.UserPortfolio, error) {
	portfolio.UserID = userID
	err := os.DB.Create(portfolio).Error
	if err != nil {
		return nil, err
	}
	return portfolio, nil
}
