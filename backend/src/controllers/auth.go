package controllers

import (
	"log"
	"net/http"

	// "strings"

	"strconv"

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
	// sessionToken := c.Request.Header.Get("Authorization")

	// var requestBody struct {
	// 	SessionToken string `json:"sessionToken"`
	// }

	// if err := c.Bind(&requestBody); err != nil {
	// 	c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	// 	return
	// }
	// log.Println("IMPORTANTTTTTTTTTTTTTTTTTT")
	// log.Println(requestBody.SessionToken)
	// sessionToken = strings.TrimPrefix(sessionToken, "Bearer ")

	// c.BindHeader("Authorization")
	id := c.Param("id")
	sessionToken, _ := strconv.ParseUint(id, 10, 32)
	log.Println(sessionToken)
	log.Println(c.Request)

	// verify the session
	// sessClaims, clerkErr := client.VerifyToken(sessionToken)
	// if clerkErr != nil {
	// 	c.Writer.WriteHeader(http.StatusUnauthorized)
	// 	return
	// }
	// // get the user, and say welcome!
	// user, clerkErr := client.Users().Read(sessClaims.Claims.Subject)
	// if clerkErr != nil {
	// 	panic(clerkErr)
	// }

	// _, err := c.Writer.Write([]byte("Welcome " + *user.FirstName))
	// if err != nil {
	// 	panic(err)
	// }
	c.JSON(http.StatusOK, "AuthenticateSession")
}
