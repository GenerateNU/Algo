package controllers

import (
	"net/http"
	"strings"

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

func (ac *AuthController) Login(c *gin.Context) {
}

func (ac *AuthController) AuthenticateSession(c *gin.Context) {
	// get session token from Authorization header
	sessionToken := c.Request.Header.Get("Authorization")
	sessionToken = strings.TrimPrefix(sessionToken, "Bearer ")

	// verify the session
	// sessClaims, err := client.VerifyToken(sessionToken)
	// if err != nil {
	// 	w.WriteHeader(http.StatusUnauthorized)
	// 	w.Write([]byte("Unauthorized"))
	// 	return
	// }
	ac.authService.Authenticate()
	c.JSON(http.StatusOK, "AuthenticateSession")
}
