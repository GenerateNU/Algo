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

		userRoutes.POST("/long-term-goal/:user_id", userController.CreateLongTermGoalForUser)
		userRoutes.GET("/long-term-goal/:user_id/", userController.GetLongTermGoalsForUser)
		userRoutes.PUT("/long-term-goal/:user_id/:goal_id", userController.UpdateLongTermGoalForUser)
		userRoutes.DELETE("/long-term-goal/:user_id/:goal_id", userController.DeleteLongTermGoalForUser)

		userRoutes.POST("/short-term-goal/:user_id/", userController.CreateShortTermGoalForUser)
		userRoutes.GET("/short-term-goal/:user_id/", userController.GetShortTermGoalsForUser)
		userRoutes.PUT("/short-term-goal/:user_id/:goal_id", userController.UpdateShortTermGoalForUser)
		userRoutes.DELETE("/short-term-goal/:user_id/:goal_id", userController.DeleteShortTermGoalForUser)
	}
}
