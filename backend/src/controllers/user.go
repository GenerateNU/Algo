package controllers

import (
	"net/http"
	"strconv"

	"backend/src/models"
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
//	@Summary		Gets all users
//	@Description	Returns all users
//	@ID				get-all-users
//	@Tags			user
//	@Produce		json
//	@Success		200	{object}	[]models.User
//	@Failure		404	{string}	string	"Failed to fetch users"
//	@Router			/api/users/  [get]
func (uc *UserController) GetAllUsers(c *gin.Context) {
	users, err := uc.userService.GetAllUsers()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch users"})
		return
	}

	c.JSON(http.StatusOK, users)
}

// CreateUser godoc
//
//		@Summary		Creates a user
//		@Description	Creates a user
//		@ID				create-user
//		@Tags			user
//		@Accept			json
//		@Produce		json
//		@Param			first_name		body	string	true		"First name of the user"
//		@Param			last_name		body	string	true		"Last name of the user"
//		@Param			username		body	string	true		"Username of the user"
//		@Param			email			body	string	true		"Email of the user"
//		@Param			password		body	string	true		"Password of the user"
//		@Success		201	  {object}	  models.User
//	    @Failure        400   {string}    string "Failed to create user"
//		@Router			/api/users/  [post]
func (uc *UserController) CreateUser(c *gin.Context) {
	var user models.User
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	createdUser, err := uc.userService.CreateUser(&user)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to create user"})
		return
	}

	c.JSON(http.StatusCreated, createdUser)
}

// GetUserById godoc
//
//		@Summary		Gets a user by id
//		@Description	Returns a user by id
//		@ID				get-user-by-id
//		@Tags			user
//		@Produce		json
//		@Param			id		path	int	true		"ID of the user"
//		@Success		200	  {object}	  models.User
//	    @Failure        404   {string}    string "Failed to fetch user"
//		@Router			/api/users/{id}  [get]
func (uc *UserController) GetUserById(c *gin.Context) {
	id := c.Param("id")
	userID, err := strconv.ParseUint(id, 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid user ID"})
		return
	}
	user, err := uc.userService.GetUserById(uint(userID))
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Failed to fetch user"})
		return
	}

	c.JSON(http.StatusOK, user)
}

// UpdateUserById godoc
//
//		@Summary		Updates a user by id
//		@Description	Updates a user by id
//		@ID				update-user-by-id
//		@Tags			user
//		@Accept			json
//		@Produce		json
//		@Param			id		path	int	true		"ID of the user"
//		@Param			first_name		body	string	true		"First name of the user"
//		@Param			last_name		body	string	true		"Last name of the user"
//		@Param			username		body	string	true		"Username of the user"
//		@Param			email			body	string	true		"Email of the user"
//		@Param			password		body	string	true		"Password of the user"
//		@Success		200	  {object}	  models.User
//	    @Failure        400   {string}    string "Failed to update user"
//		@Router			/api/users/{id}  [put]
func (uc *UserController) UpdateUserById(c *gin.Context) {
	id := c.Param("id")
	userID, _ := strconv.ParseUint(id, 10, 32)
	var user *models.User
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	updatedUser, err := uc.userService.UpdateUserById(uint(userID), user)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to update user"})
		return
	}

	c.JSON(http.StatusOK, updatedUser)
}

// DeleteUserById godoc
//
//		@Summary		Deletes a user by id
//		@Description	Deletes a user by id
//		@ID				delete-user-by-id
//		@Tags			user
//		@Produce		json
//		@Param			id		path	int	true		"ID of the user"
//		@Success		200	  {object}	  models.User
//	    @Failure        404   {string}    string "Failed to delete user"
//		@Router			/api/users/{id}  [delete]
func (uc *UserController) DeleteUserById(c *gin.Context) {
	id := c.Param("id")
	userID, _ := strconv.ParseUint(id, 10, 32)
	user, err := uc.userService.DeleteUserById(uint(userID))
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Failed to delete user"})
		return
	}

	c.JSON(http.StatusOK, user)
}
