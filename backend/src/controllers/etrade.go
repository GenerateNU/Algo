package controllers

import (
	"backend/src/services"
	"backend/src/types"
	"fmt"
	"log"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
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
//	@Router			/etrade/redirect/{user_id}  [get]
func (etc *ETradeController) GetRedirectURL(c *gin.Context) {
	userIdParam := c.Param("user_id")

	userId, err := strconv.ParseUint(userIdParam, 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "user_id invalid"})
		return
	}

	url, err := etc.etradeService.GetETradeRedirectURL(uint(userId))
	if err != nil {
		log.Println(err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve redirect URL"})
		return
	}

	data := types.RedirectURLResponse{
		RedirectURL: url,
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
//	@Router			/etrade/verify/{user_id}  [post]
func (etc *ETradeController) Verify(c *gin.Context) {
	userIdParam := c.Param("user_id")

	userId, err := strconv.ParseUint(userIdParam, 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "user_id invalid"})
		return
	}

	var json types.VerifyRequest
	if err := c.ShouldBindJSON(&json); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	err = etc.etradeService.GetAccessToken(uint(userId), json.Verifier)
	if err != nil {
		log.Println(err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve access token"})
		return
	}

	c.Status(http.StatusOK)
}

// Status godoc
//
//	@Summary		Get the status of the user's E*Trade access token
//	@Description	Returns the status
//	@ID				oauth-status
//	@Tags			etrade
//	@Accept			json
//	@Produce		json
//	@Success		200		{object}	StatusResponse
//	@Failure		500		{string}	string				"Failed to retrieve access token status"
//	@Router			/etrade/status/{user_id}  [post]
func (etc *ETradeController) Status(c *gin.Context) {
	userIdParam := c.Param("user_id")

	userId, err := strconv.ParseUint(userIdParam, 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "user_id invalid"})
		return
	}

	status, err := etc.etradeService.GetAccessTokenStatus(uint(userId))
	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve access token status"})
		return
	}

	data := types.StatusResponse{
		Status: status,
	}

	c.JSON(http.StatusOK, data)
}

// Sync godoc
//
//	@Summary		Get the latest user portfolio data from E*Trade
//	@Description	Syncs and returns the portfolio data
//	@ID				etrade-sync-portfolio
//	@Tags			etrade
//	@Produce		json
//	@Success		200		{object}	[]UserPortfolio
//	@Failure		500		{string}	string				"Failed to sync portfolio"
//	@Router			/etrade/sync/{user_id}  [post]
func (etc *ETradeController) Sync(c *gin.Context) {
	userIdParam := c.Param("user_id")

	userId, err := strconv.ParseUint(userIdParam, 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "user_id invalid"})
		return
	}

	positions, err := etc.etradeService.SyncPortfolio(uint(userId))
	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to sync portfolio"})
		return
	}

	c.JSON(http.StatusOK, positions)
}

// GetPortfolio godoc
//
//	@Summary		Get the user portfolio
//	@Description	Returns the portfolio data
//	@ID				etrade-get-portfolio
//	@Tags			etrade
//	@Produce		json
//	@Success		200		{object}	[]UserPortfolio
//	@Failure		500		{string}	string				"Failed to sync portfolio"
//	@Router			/etrade/portfolio/{user_id}  [get]
func (etc *ETradeController) GetPortfolio(c *gin.Context) {
	userIdParam := c.Param("user_id")

	userId, err := strconv.ParseUint(userIdParam, 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "user_id invalid"})
		return
	}

	positions, err := etc.etradeService.GetUserPortfolio(uint(userId))
	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get portfolio"})
		return
	}

	c.JSON(http.StatusOK, positions)
}
