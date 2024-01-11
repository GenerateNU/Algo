package routes

import (
	"backend/src/controllers"
	"backend/src/services"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func SetupUserRoutes(router *gin.Engine, db *gorm.DB) {
	userService := services.NewUserService(db)
	userController := controllers.NewUserController(userService)

	userRoutes := router.Group("/users")
	{
		userRoutes.GET("/", userController.GetAllUsers)
		// Add more user routes as needed
	}
}
