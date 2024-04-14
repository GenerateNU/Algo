package controllers

import (
	"backend/src/services"
	"github.com/gin-gonic/gin"
	"net/http"
)

type TrendingController struct {
	trendingService *services.TrendingUserService
}

func NewTrendingController(trendingService *services.TrendingUserService) *TrendingController {
	return &TrendingController{
		trendingService: trendingService,
	}
}

// GetTrending godoc
//
//		@Summary		Gets all trending Users
//		@Description	Returns all trending users as trending user objects
//		@ID				get-all-followings
//		@Tags			followings
//		@Produce		json
//		@Success		200	  {object}	  []models.Followings
//	    @Failure        404   {string}    string "Failed to fetch followers: 404 Error"
//		@Router			/api/following/  [get]
func (tre *TrendingController) GetTrending(c *gin.Context) {
	trending, err := tre.trendingService.GetTrendingUsers()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch users", "msg": err})
		return
	}

	c.JSON(http.StatusOK, trending)
}
