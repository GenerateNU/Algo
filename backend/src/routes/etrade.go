package routes

import (
	"backend/src/controllers"
	"backend/src/services"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func SetupETradeRoutes(router *gin.Engine, db *gorm.DB) {
	etradeService := services.NewETradeService(db)
	etradeController := controllers.NewETradeController(etradeService)

	etradeRoutes := router.Group("/etrade")
	{
		etradeRoutes.GET("/", etradeController.Authenticate)
	}
}
