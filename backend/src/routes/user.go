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
		userRoutes.POST("/", userController.CreateUser)
		userRoutes.GET("/:id", userController.GetUserById)
		userRoutes.PUT("/:id", userController.UpdateUserById)
		userRoutes.DELETE("/:id", userController.DeleteUserById)
    
		userRoutes.POST("/:user_id/create-long-term-goal", userController.CreateLongTermGoalForUser)
		userRoutes.GET("/:user_id/get-long-term-goals", userController.GetLongTermGoalsForUser)
		userRoutes.PUT("/:user_id/update-long-term-goal/:goal_id", userController.UpdateLongTermGoalForUser)
		userRoutes.DELETE("/:user_id/delete-long-term-goal/:goal_id", userController.DeleteLongTermGoalForUser)

		userRoutes.POST("/:user_id/create-short-term-goal", userController.CreateShortTermGoalForUser)
		userRoutes.GET("/:user_id/get-short-term-goals", userController.GetShortTermGoalsForUser)
		userRoutes.PUT("/:user_id/update-short-term-goal/:goal_id", userController.UpdateShortTermGoalForUser)
		userRoutes.DELETE("/:user_id/delete-short-term-goal/:goal_id", userController.DeleteShortTermGoalForUser)
	}
}
