package controllers

import (
	"net/http"

	"backend/src/services"

	"github.com/gin-gonic/gin"
)

type UserController struct {
	userService *services.UserService
}

func NewUserController(userService *services.UserService) *UserController {
	return &UserController{
		userService: userService,
	}
}

// GetAllUsers godoc
//
//		@Summary		Gets all users
//		@Description	Returns all users
//		@ID				get-all-users
//		@Tags			user
//		@Produce		json
//		@Success		200	  {object}	  []models.User
//	    @Failure        404   {string}    string "Failed to fetch users"
//		@Router			/api/users/  [get]
func (uc *UserController) GetAllUsers(c *gin.Context) {
	users, err := uc.userService.GetAllUsers()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch users"})
		return
	}

	c.JSON(http.StatusOK, users)
}
