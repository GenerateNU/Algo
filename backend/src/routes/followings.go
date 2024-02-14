package routes

//TODO: Figure out what I'm doing here

import (
	"backend/src/controllers"
	"backend/src/services"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func SetupFollowingRoutes(router *gin.Engine, db *gorm.DB) {
	followingService := services.NewFollowingService(db)
	followingController := controllers.NewFollowingController(followingService)

	followingRoutes := router.Group("/followings")
	{
		followingRoutes.GET("/", followingController.GetAllFollowings)
	}
}

//Set up various
