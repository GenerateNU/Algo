package controllers

import (
	"backend/src/services"
	"backend/src/types"
	"fmt"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

type PositionsController struct {
	positionsService *services.PositionsService
}

func NewPositionsController(positionsService *services.PositionsService) *PositionsController {
	return &PositionsController{
		positionsService: positionsService,
	}
}

func (pc *PositionsController) GetAllPositions(c *gin.Context) {
	portfolioID := c.Param("portfolioID")

	positions, err := pc.positionsService.GetAllPositions(portfolioID)
	if err != nil {
		log.Printf("Failed to get positions: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get positions"})
		return
	}

	c.JSON(http.StatusOK, positions)
}