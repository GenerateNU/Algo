package controllers

import (
	"backend/src/services"
	"net/http"

	// "fmt"

	"github.com/gin-gonic/gin"

	"backend/src/models"
)

type PortfolioController struct {
	portfolioService *services.PortfolioService
	etradeService    *services.ETradeService
}

func NewPortfolioController(portfolioService *services.PortfolioService, etradeService *services.ETradeService) *PortfolioController {
	return &PortfolioController{
		portfolioService: portfolioService,
		etradeService:    etradeService,
	}
}

// CopyPortfolio copies the target user's portfolio to the current user's portfolio
func (etc *PortfolioController) CopyPortfolio(c *gin.Context) {
	currentUserID := c.Query("current_user_id")
	targetUserID := c.Query("target_user_id")

	// get current user's portfolio. If it doesn't exist, create empty portfolio
	currentUserPortfolio, err := etc.portfolioService.GetUserPortfolio(currentUserID)
	if err != nil {
		// create empty portfolio for the user
		emptyPortfolio := &models.UserPortfolio{}
		newPortfolio, createErr := etc.portfolioService.CreateUserPortfolio(currentUserID, emptyPortfolio)
		currentUserPortfolio = newPortfolio
		if createErr != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create empty portfolio", "errorMessage": createErr.Error()})
			return
		}
	}

	// get target user's portfolio. If it doesn't exist, return error
	targetPortfolio, err := etc.portfolioService.GetUserPortfolio(targetUserID)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Target User does not have portfolio to copy", "errorMessage": err.Error()})
		return
	}

	// if target user has no positions, return error
	if len(targetPortfolio.Positions) == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Target User's Portfolio has no positions to copy"})
		return
	}

	// copy positions to current user's portfolio
	_, copyErr := etc.portfolioService.CopyPortfolio(*currentUserPortfolio, *targetPortfolio)
	if copyErr != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to copy positions", "errorMessage": copyErr.Error()})
		return
	}

	// retrieve portfolio so db has time to register new positions and index their ids
	updatedPortfolio, retrieveErr := etc.portfolioService.GetUserPortfolio(currentUserID)
	if retrieveErr != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve updated portfolio", "errorMessage": retrieveErr.Error()})
		return
	}

	c.JSON(http.StatusOK, updatedPortfolio)
	// c.JSON(http.StatusOK, copiedPortfolio)
}

// GetUserPortfolio returns the user's portfolio
func (etc *PortfolioController) GetUserPortfolio(c *gin.Context) {
	userID := c.Param("user_id")

	// Get the user's portfolio
	portfolio, err := etc.portfolioService.GetUserPortfolio(userID)
	if err != nil {
		c.JSON(http.StatusOK, gin.H{"message": "User does not have portfolio"})
		return
	}

	c.JSON(http.StatusOK, portfolio)
}
