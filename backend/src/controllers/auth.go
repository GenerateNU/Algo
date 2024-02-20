package controllers

import (
	"net/http"
	// "strconv"

	// "backend/src/models"
	"backend/src/services"

	"github.com/gin-gonic/gin"
)

type AuthController struct {
	authService *services.AuthService
}

func NewAuthController(authService *services.AuthService) *AuthController {
	return &AuthController{
		authService: authService,
	}
}

func (ac *AuthController) AuthenticateSession(c *gin.Context) {

	c.JSON(http.StatusOK, "AuthenticateSession")
}
