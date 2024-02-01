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
		// User table
		userRoutes.GET("/", userController.GetAllUsers)

		// UserShortTermGoals table
		// userRoutes.GET("/:id/short", userController.GetUserShortTermGoals)

		// UserLongTermGoals table
		// userRoutes.GET("/:id/long", userController.GetUserLongTermGoals)
	}
}
