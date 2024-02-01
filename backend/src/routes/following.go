package routes

import (
	"backend/src/controllers"
	"backend/src/services"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func SetupFollowingRoutes(router *gin.Engine, db *gorm.DB) {
	followingService := services.NewFollowingService(db)
	followingController := controllers.NewUserController(userService)

	followingRoutes := router.Group("/following")
	{
		// Add more following routes as needed
	}
}