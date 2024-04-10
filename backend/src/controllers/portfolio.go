package controllers

import (
	"backend/src/services"
	"backend/src/types"
	"fmt"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

type PortfolioController struct {
	portfolioService *services.PortfolioService
}

func NewPortfolioController(portfolioService *services.PortfolioService) *PortfolioController {
	return &PortfolioController{
		portfolioService: portfolioService,
	}
}


func (etc *PortfolioController) CopyPortfolio(c *gin.Context) {
	targetUserID := c.Param("target_user_id")
	currentUserID := c.Param("current_user_id")

	// if portfolio doesn't exist, return
	portfolio, err := etc.portfolioService.GetPortfolio(targetUserID)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Portfolio not found"})
		return
	}

	// if portfolio exists, get the target user's portfolio
	targetPortfolio, err := etc.portfolioService.GetPortfolio(targetUserID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get target user's portfolio"})
		return
	}

	// with the user's target portfolio, get the user's positions
	positions, err := etc.portfolioService.GetPositions(targetPortfolio)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get positions"})
		return
	}

	// for each position, create a new position for the current user
	for _, position := range positions {
		newPosition := types.Position{
			ID:         currentUserID,
			Symbol:     position.Symbol,
			Quantity:   position.Quantity,
			AvgPrice:   position.AvgPrice,
			CreatedAt:  time.Now(),
			PositionID: position.ID,
			Ticker:     position.Symbol,
			Cost:       position.AvgPrice,
			DayGain:    0.0,
			DayGainPct: 0.0,
			TotalGain:  0.0,
			TotalGainPct: 0.0,
			Type:       "trade_type_enum",
		}
		err := etc.portfolioService.CreatePosition(newPosition)
		if err != nil {
			log.Println("Failed to create position:", err)
		}
	}

	

	c.JSON(http.StatusOK, data)
}