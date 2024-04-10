package routes

import (
	"backend/src/controllers"
	"backend/src/services"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func SetupPortfolioRoutes(router *gin.Engine, db *gorm.DB) {
	portfolioService := services.NewPortfolioService(db)
	portfolioController := controllers.NewPortfolioController(portfolioService)

	portfolioRoutes := router.Group("/portfolio")
	{
		portfolioRoutes.PUT("/:target_user_id/:current_user_id", portfolioController.CopyPortfolio)
	}
}
