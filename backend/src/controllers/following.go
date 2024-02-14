package controllers

//TODO: Figure out what I'm doing here
//Seems to dispatch queries to services
//Handles any errors thrown by DB connection?

import (
	"net/http"

	"backend/src/services"

	"github.com/gin-gonic/gin"
)

type FollowingController struct {
	followingService *services.FollowingService
}

func NewFollowingController(followingService *services.FollowingService) *FollowingController {
	return &FollowingController{
		followingService: followingService,
	}
}

// GetAllFollowing godoc
//
//		@Summary		Gets all following, CRUD: Retrieve
//		@Description	Returns all following
//		@ID				get-all-following
//		@Tags			following
//		@Produce		json
//		@Success		200	  {object}	  []models.Following
//	    @Failure        404   {string}    string "Failed to fetch followers: 404 Error"
//		@Router			/api/following/  [get]
func (fol *FollowingController) GetAllFollowing(c *gin.Context) {
	following, err := fol.followingService.GetAllFollowing()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch users"})
		return
	}

	c.JSON(http.StatusOK, following)
}

// TODO: Update
// TODO: Delete
func (fol *FollowingController) unfollowUser(c *gin.Context) {

}

//TODO: Create?
