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
	trendingService := services.NewTrendingUserService(db)
	trendingController := controllers.NewTrendingController(trendingService)

	followingRoutes := router.Group("/following")
	{
		followingRoutes.GET("", followingController.GetAllFollowings)
		followingRoutes.POST("", followingController.CreateFollowings)
		followingRoutes.DELETE("/:follower_user_id/:following_user_id", followingController.UnfollowUser)

	}
	timelineRoutes := router.Group("/timelines")
	{
		// Get a user timeline
		timelineRoutes.GET("/:follower_user_id", followingController.GetTimeline)
	}

	followersRoutes := router.Group("/followers")
	{
		// Get all of a users followers
		followersRoutes.GET("/:following_user_id", followingController.GetFollowers)
	}

	leaderRoutes := router.Group("/leaders")
	{
		//Get the 10 users with the most followers
		leaderRoutes.GET("/", followingController.GetLeaders)
	}
	trendingRoutes := router.Group("/trending")
	{
		trendingRoutes.GET("/", trendingController.GetTrending)
	}

}
