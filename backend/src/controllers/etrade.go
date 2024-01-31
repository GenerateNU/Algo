package controllers

import (
	"backend/src/services"
	"github.com/gin-gonic/gin"
	"net/http"
)

type ETradeController struct {
	etradeService *services.ETradeService
}

func NewETradeController(etradeService *services.ETradeService) *ETradeController {
	return &ETradeController{
		etradeService: etradeService,
	}
}

func (etc *ETradeController) Authenticate(c *gin.Context) {
	err := etc.etradeService.OAuthFlow()
	if err != nil {
		println(err.Error())
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to authenticate"})
		return
	}

	c.JSON(http.StatusOK, "auth successful")
}
