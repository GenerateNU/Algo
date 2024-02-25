package routes

import (
	"backend/src/controllers"
	"backend/src/services"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func SetupOnboardingRoutes(router *gin.Engine, db *gorm.DB) {
	goalService := services.NewGoalService(db)
	goalController := controllers.NewGoalController(goalService)

	etradeRoutes := router.Group("/goals")
	{
		etradeRoutes.GET("/short-term", goalController.GetShortTermGoals)
		etradeRoutes.GET("/long-term", goalController.GetLongTermGoals)
	}
}
