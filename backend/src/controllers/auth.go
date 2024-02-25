package controllers

import (
	"log"
	"net/http"

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

	// verify the session
	sessClaims, clerkErr := client.VerifyToken(sessionToken)
	if clerkErr != nil {
		log.Println(clerkErr.Error())
		c.JSON(http.StatusBadRequest, gin.H{"error": clerkErr.Error()})
		return
	}

	// get the user
	user, clerkErr := client.Users().Read(sessClaims.Claims.Subject)
	if clerkErr != nil {
		log.Println(clerkErr.Error())
		c.JSON(http.StatusBadRequest, gin.H{"error": clerkErr.Error()})
	}

	c.JSON(http.StatusOK, gin.H{"message": "Welcome " + *user.Username})
}
