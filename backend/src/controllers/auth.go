package controllers

import (
	"log"
	"net/http"
	"strings"

	// "strconv"

	// "backend/src/models"
	"backend/src/services"

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

func (ac *AuthController) Login(c *gin.Context) {
}

func (ac *AuthController) AuthenticateSession(c *gin.Context, client clerk.Client) {
	// get session token from Authorization header
	sessionToken := c.Request.Header.Get("Authorization")
	sessionToken = strings.TrimPrefix(sessionToken, "Bearer ")
	log.Println(sessionToken)
	log.Println("AuthenticateSession")

	// verify the session
	sessClaims, err := client.VerifyToken(sessionToken)
	if err != nil {
		c.Writer.WriteHeader(http.StatusUnauthorized)
		c.Writer.Write([]byte("Unauthorized"))
		return
	}
	// get the user, and say welcome!
	user, err := client.Users().Read(sessClaims.Claims.Subject)
	if err != nil {
		panic(err)
	}

	c.Writer.Write([]byte("Welcome " + *user.FirstName))
	c.JSON(http.StatusOK, "AuthenticateSession")
}
