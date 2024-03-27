package routes

import (
	"backend/src/controllers"
	"backend/src/services"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func SetupPostRoutes(router *gin.Engine, db *gorm.DB) {
	postService := services.NewPostService(db)
	postController := controllers.NewPostController(postService)

	postRoutes := router.Group("/posts")
	{
		postRoutes.GET("", postController.GetAllPosts)
		postRoutes.GET("/user-posts/:user_id", postController.GetPostsByUserId)
		postRoutes.GET("/followed-posts/:user_id", postController.GetPostsFromFollowedUsers)
		postRoutes.GET("/search-posts", postController.GetPostsFromSearch)
		postRoutes.POST("", postController.CreatePost)
		postRoutes.GET("/:id", postController.GetPostById)
		postRoutes.PUT("/:id", postController.UpdatePostById)
		postRoutes.DELETE("/:id", postController.DeletePostById)
	}
}
