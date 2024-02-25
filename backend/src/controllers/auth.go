package controllers

import (
	"log"
	"net/http"

	"backend/src/models"
	"backend/src/services"
	"backend/src/types"

	"github.com/clerkinc/clerk-sdk-go/clerk"
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

func (ac *AuthController) Register(c *gin.Context) {
	// parse user info from body
	var user models.User
	if err := c.ShouldBindJSON(&user); err != nil {
		log.Fatal(err.Error())
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error(), "body": c.Request.Body})
		return
	}

	clerkErr := ac.authService.Register(user)
	if clerkErr != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": clerkErr.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "User registered successfully"})
}

func (ac *AuthController) AuthenticateSession(c *gin.Context, client clerk.Client) {
	// parse sessionToken from body using AuthRequest struct
	var authRequest types.AuthRequest
	if err := c.ShouldBindJSON(&authRequest); err != nil {
		log.Fatal(err.Error())
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error(), "body": c.Request.Body})
		return
	}
	sessionToken := authRequest.Body.SessionToken
	user, clerkErr := ac.authService.AuthenticateSession(client, sessionToken)
	if clerkErr != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": clerkErr.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Welcome " + *user.Username})
}

func (ac *AuthController) GetSession(c *gin.Context, client clerk.Client) {

	claims, activeSession := clerk.SessionFromContext(c)

	if !activeSession {
		c.JSON(http.StatusOK, gin.H{"message": "No active session"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"Session ID": claims.SessionID})
}
