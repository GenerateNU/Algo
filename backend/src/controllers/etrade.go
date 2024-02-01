package controllers

import (
	"backend/src/services"
	"backend/src/types"
	"fmt"
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

// GetRedirectURL godoc
//
//	@Summary		Gets a redirect URL to authenticate with E*Trade
//	@Description	Returns a redirect URL
//	@ID				oauth-redirect-url
//	@Tags			etrade
//	@Produce		json
//	@Success		200	{object}	RedirectURLResponse
//	@Failure		500	{string}	string	"Failed to retrieve redirect URL"
//	@Router			/etrade/redirect  [get]
func (etc *ETradeController) GetRedirectURL(c *gin.Context) {
	// TODO: Remove hardcoded UserID when auth is setup
	url, err := etc.etradeService.GetETradeRedirectURL(1)
	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve redirect URL"})
		return
	}

	data := map[string]interface{}{
		"redirect_url": url,
	}

	c.JSON(http.StatusOK, data)
}

// Verify godoc
//
//	@Summary		Gets a redirect URL to authenticate with E*Trade
//	@Description	Returns a redirect URL
//	@ID				oauth-verify
//	@Tags			etrade
//	@Accept			json
//	@Produce		json
//	@Param			request	body		types.VerifyRequest	true	"request body"
//	@Success		200		{string}	string				"ok"
//	@Failure		400		{string}	string				"Failed to validate JSON body"
//	@Failure		500		{string}	string				"Failed to retrieve access token"
//	@Router			/etrade/verify  [post]
func (etc *ETradeController) Verify(c *gin.Context) {
	var json types.VerifyRequest
	if err := c.ShouldBindJSON(&json); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// TODO: Remove hardcoded UserID when auth is setup
	err := etc.etradeService.GetAccessToken(1, json.Verifier)
	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve access token"})
		return
	}

	c.Status(http.StatusOK)
}
