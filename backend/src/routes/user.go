package routes

import (
	"backend/src/controllers"
	"backend/src/services"

	"github.com/clerkinc/clerk-sdk-go/clerk"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func SetupUserRoutes(router *gin.Engine, db *gorm.DB, clerkClient clerk.Client) {
	userService := services.NewUserService(db)
	userController := controllers.NewUserController(userService)

	userRoutes := router.Group("/users")
	{
		/* Protected Routes */

		/*
			!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			Clerk middleware currently doesn't work since ngrok does not allow us to
			edit request headers.

			We can:
			- implement our own clerk middleware
			- find out how to modify request headers with axios and bypass ngrok
			- find out how to modify request headers with ngrok options dynamically
			- add middleware to filter all requests and attach headers once they reach the backend (might conflict with clerk)

		*/
		// SetupAuthMiddleware(clerkClient, router)
		userRoutes.PUT("/:id", userController.UpdateUserById)
		userRoutes.DELETE("/:id", userController.DeleteUserById)


		userRoutes.POST("/long-term-goal/:user_id", userController.CreateLongTermGoalForUser)
		userRoutes.GET("/long-term-goal/:user_id/", userController.GetLongTermGoalsForUser)
		userRoutes.PUT("/long-term-goal/:user_id/:goal_id", userController.UpdateLongTermGoalForUser)
		userRoutes.DELETE("/long-term-goal/:user_id/:goal_id", userController.DeleteLongTermGoalForUser)

		userRoutes.POST("/short-term-goal/:user_id", userController.CreateShortTermGoalForUser)
		userRoutes.GET("/short-term-goal/:user_id", userController.GetShortTermGoalsForUser)
		userRoutes.PUT("/short-term-goal/:user_id/:goal_id", userController.UpdateShortTermGoalForUser)
		userRoutes.DELETE("/short-term-goal/:user_id/:goal_id", userController.DeleteShortTermGoalForUser)

		userRoutes.POST("/onboard", userController.OnboardUser)
	}
}
