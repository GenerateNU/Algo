package controllers

import (
	"net/http"
	"os"

	"github.com/clerk/clerk-sdk-go/v2"
	"github.com/clerk/clerk-sdk-go/v2/user"
	"github.com/gin-gonic/gin"
)

type UserClerkController struct {
}

func NewUserClerkController() *UserClerkController {
	return &UserClerkController{}
}

func (uc *UserClerkController) GetAllUsers(c *gin.Context) {
	clerk.SetKey(os.Getenv("EXPO_PUBLIC_CLERK_SECRET_KEY"))

	users, err := user.List(c, &user.ListParams{})
	if err != nil {
		c.JSON(http.StatusInternalServerError, err)
		return
	}

	c.JSON(http.StatusOK, users)
}

func (uc *UserClerkController) GetUserById(c *gin.Context) {
	clerk.SetKey(os.Getenv("EXPO_PUBLIC_CLERK_SECRET_KEY"))

	user, err := user.Get(c, c.Param("id"))
	if err != nil {
		c.JSON(http.StatusInternalServerError, err)
		return
	}

	c.JSON(http.StatusOK, user)
}

func (uc *UserClerkController) SearchUserByQuery(c *gin.Context) {
	clerk.SetKey(os.Getenv("EXPO_PUBLIC_CLERK_SECRET_KEY"))

	query := c.Param("query")
	users, err := user.List(c, &user.ListParams{Query: &query})
	if err != nil {
		c.JSON(http.StatusInternalServerError, err)
		return
	}

	c.JSON(http.StatusOK, users)
}
