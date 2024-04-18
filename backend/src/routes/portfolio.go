package routes

import (
	"backend/src/controllers"
	"backend/src/services"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func SetupPortfolioRoutes(router *gin.Engine, db *gorm.DB) {
	portfolioService := services.NewPortfolioService(db)
	etradeService := services.NewETradeService(db)
	portfolioController := controllers.NewPortfolioController(portfolioService, etradeService)

	portfolioRoutes := router.Group("/portfolio")
	{
		portfolioRoutes.PUT("", portfolioController.CopyPortfolio)
		/* different than getportfolio in etrade, returns single object for simplicity
		keep etrade getportfolio route to match actual Etrade data
		use either call depending on what you need
		*/
		portfolioRoutes.GET("/:user_id", portfolioController.GetUserPortfolio)
	}
}
