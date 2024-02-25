package routes

import (
	"backend/src/controllers"
	"backend/src/services"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

// SetupFollowingRoutes sets up routes related to followings, timelines, and followers.
//
// Parameters:
//   - router: A pointer to a Gin Engine instance where routes will be set up.
//   - db: A pointer to algo db instance
//
// Returns: None.
func SetupFollowingRoutes(router *gin.Engine, db *gorm.DB) {
	followingService := services.NewFollowingService(db)
	followingController := controllers.NewFollowingController(followingService)

	followingRoutes := router.Group("/followings")
	{
		//Get all following relations: Done
		followingRoutes.GET("/", followingController.GetAllFollowings)
		// Create a following relation: Done
		followingRoutes.POST("", followingController.CreateFollowings)
		//Delete a following relation
		followingRoutes.DELETE("/:follower_user_id/:followed_user_id", followingController.UnfollowUser)

	}
	timelineRoutes := router.Group("/timelines")
	{
		// Get a user timeline
		timelineRoutes.GET("/:follower_user_id", followingController.GetTimeline)
	}

	followersRoutes := router.Group("/followers")
	{
		// Get all of a users followers
		followersRoutes.GET("/:followed_user_id", followingController.GetFollowers)
	}

}
