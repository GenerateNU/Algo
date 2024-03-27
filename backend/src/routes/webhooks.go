package routes

import (
	"backend/src/controllers"
	"backend/src/services"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func SetupWebhookRoutes(router *gin.Engine, db *gorm.DB) {
	userService := services.NewUserService(db)
	webhooksController := controllers.NewWebhooksController(userService)

	webhooksRoutes := router.Group("/webhooks")
	{
		webhooksRoutes.POST("/create", webhooksController.CreateUserWebhook)
		webhooksRoutes.POST("/update", webhooksController.UpdateUserWebhook)
		webhooksRoutes.POST("/delete", webhooksController.DeleteUserWebhook)
	}
}
