package controllers

import (
	"net/http"

	"backend/src/models"
	"backend/src/services"
	"backend/src/types"

	"github.com/gin-gonic/gin"
)

type WebhooksController struct {
	userService *services.UserService
}

func NewWebhooksController(userService *services.UserService) *WebhooksController {
	return &WebhooksController{
		userService: userService,
	}
}

// CreateUserWebhook godoc
//
//		@Summary		Webhook for createUser in Clerk
//		@Description	Creates a user in the DB to match Clerk
//		@ID				create-user
//		@Tags			user
//		@Accept			json
//		@Produce		json
//		@Success		201	  {object}	  models.User
//	    @Failure        400   {string}    string "Failed to create user"
//		@Router			/api/users/  [post]
func (wc *WebhooksController) CreateUserWebhook(c *gin.Context) {
	// Parse JSON body into ClerkWebhookEvent struct
	var event types.ClerkWebhookEvent
	if err := c.BindJSON(&event); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to update user"})
		return
	}

	if event.Type != "user.created" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to fetch users"})
		return
	}

	// Access data and transform it to User model
	userData := event.Data // Access data field from JSON
	user := models.User{
		ID:        getStringValue(userData, "id"),
		FirstName: getStringValue(userData, "first_name"),
		LastName:  getStringValue(userData, "last_name"),
		Username:  getStringValue(userData, "username"),
		ImageURL:  getStringValue(userData, "image_url"),
	}

	createdUser, err := wc.userService.CreateUser(&user)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to create user"})
		return
	}

	c.JSON(http.StatusCreated, createdUser)
}

// UpdateUserWebhook godoc
//
//		@Summary		Webhook for updateUser in Clerk
//		@Description	Updates a user in the DB to match Clerk
//		@ID				update-user
//		@Tags			user
//		@Accept			json
//		@Produce		json
//		@Success		201	  {object}	  models.User
//	    @Failure        400   {string}    string "Failed to update user"
//		@Router			/api/users/  [post]
func (wc *WebhooksController) UpdateUserWebhook(c *gin.Context) {
	// Parse JSON body into ClerkWebhookEvent struct
	var event types.ClerkWebhookEvent
	if err := c.BindJSON(&event); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to update user"})
		return
	}

	if event.Type != "user.updated" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to fetch users"})
		return
	}

	// Access data and transform it to User model
	userData := event.Data // Access data field from JSON
	userId := userData["id"].(string)
	user := models.User{
		ID:        userId,
		FirstName: getStringValue(userData, "first_name"),
		LastName:  getStringValue(userData, "last_name"),
		Username:  getStringValue(userData, "username"),
		ImageURL:  getStringValue(userData, "image_url"),
	}

	createdUser, err := wc.userService.UpdateUserById(userId, &user)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to update user"})
		return
	}

	c.JSON(http.StatusCreated, createdUser)
}

// DeleteUserWebhook godoc
//
//		@Summary		Webhook for deleteUser in Clerk
//		@Description	Deletes a user in the DB to match Clerk
//		@ID				delete-user
//		@Tags			user
//		@Accept			json
//		@Produce		json
//		@Success		201	  {object}	  models.User
//	    @Failure        400   {string}    string "Failed to delete user"
//		@Router			/api/users/  [post]
func (wc *WebhooksController) DeleteUserWebhook(c *gin.Context) {
	// Parse JSON body into ClerkWebhookEvent struct
	var event types.ClerkWebhookEvent
	if err := c.BindJSON(&event); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to update user"})
		return
	}

	if event.Type != "user.deleted" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to fetch users"})
		return
	}

	// Access data and transform it to User model
	userData := event.Data // Access data field from JSON
	userId := userData["id"].(string)

	createdUser, err := wc.userService.DeleteUserById(userId)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to delete user"})
		return
	}

	c.JSON(http.StatusCreated, createdUser)
}

func getStringValue(data map[string]interface{}, key string) string {
	if val, ok := data[key]; ok && val != nil {
		if strVal, ok := val.(string); ok {
			return strVal
		}
	}
	return ""
}
