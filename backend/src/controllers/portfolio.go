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
	etradeService *services.ETradeService
}

func NewPortfolioController(portfolioService *services.PortfolioService, etradeService *services.ETradeService) *PortfolioController {
	return &PortfolioController{
		portfolioService: portfolioService,
		etradeService: etradeService,
	}
}


func (etc *PortfolioController) CopyPortfolio(c *gin.Context) {
	targetUserID := c.Param("target_user_id")
	currentUserID := c.Param("current_user_id")

	// if portfolio doesn't exist, return
	portfolio, err := etc.etradeService.GetPortfolio(targetUserID)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Portfolio not found"})
		return
	}

	// if portfolio exists, get the target user's portfolio
	targetPortfolio, err := etc.etradeService.GetPortfolio(targetUserID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get target user's portfolio"})
		return
	}

	// get positions from target user's portfolio
	targetPositions, err := etc.portfolioService.GetPositions(targetPortfolio.ID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get positions"})
		return
	}

	// copy positions to current user's portfolio
	_, err = etc.portfolioService.CopyPortfolio(targetPositions, currentUserID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to copy positions"})
		return
	}

	c.JSON(http.StatusOK, data)
}