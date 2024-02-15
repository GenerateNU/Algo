package controllers

//TODO: Figure out what I'm doing here
//Seems to dispatch queries to services
//Handles any errors thrown by DB connection?

import (
	"backend/src/models"
	"backend/src/services"
	"net/http"

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

// GetAllFollowings godoc
//
//		@Summary		Gets all followings relations
//		@Description	Returns all followings relations as objects
//		@ID				get-all-followings
//		@Tags			followings
//		@Produce		json
//		@Success		200	  {object}	  []models.Followings
//	    @Failure        404   {string}    string "Failed to fetch followers: 404 Error"
//		@Router			/api/following/  [get]
func (fol *FollowingController) GetAllFollowings(c *gin.Context) {
	followings, err := fol.followingService.GetAllFollowings()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch users"})
		return
	}

	c.JSON(http.StatusOK, followings)
}

// GetAllFollowers godoc
//
//		@Summary		Gets all followings relations
//		@Description	Returns all users following the input user
//		@ID				get-all-followers
//		@Tags			user-followings
//		@Produce		json
//		@Success		200	  {object}	  []models.Users
//	    @Failure        404   {string}    string "Failed to fetch followers: 404 Error"
//		@Router			todo: /api/following/  [get]
func (fol *FollowingController) GetAllFollowers(c *gin.Context, user models.User) {
	followings, err := fol.followingService.GetAllUserFollowers(user)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch users"})
		return
	}

	c.JSON(http.StatusOK, followings)
}

// GetAllUserFollowings godoc
//
//		@Summary		Gets all users followed by an input user
//		@ID				get-all-user-followings
//		@Tags			user-followings
//		@Produce		json
//		@Success		200	  {object}	  []models.Users
//	    @Failure        404   {string}    string "Failed to fetch followers: 404 Error"
//		@Router			todo: /api/following/  [get]
func (fol *FollowingController) GetAllUserFollowings(c *gin.Context, user models.User) {
	followings, err := fol.followingService.GetAllUserFollowings(user)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch users"})
		return
	}

	c.JSON(http.StatusOK, followings)
}

// unfollowUser godoc
//
//		@Summary		Gets all users followed by an input user
//		@ID				get-all-user-followings
//		@Tags			user-followings
//		@Produce		json
//		@Success		200	  {string} string "User unfollowed successfully"
//	    @Failure        404   {string}    string "Failed to unfollow user: 404 Error"
//		@Router			todo: /api/following/  [get]
func (fol *FollowingController) unfollowUser(c *gin.Context, follower uint, following uint) {
	err := fol.followingService.DeleteFollowing(follower, following)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to unfollow user"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"msg": "User unfollowed successfully"})
}

// removeUserFromFollowings godoc
//
//		@Summary		Gets all users followed by an input user
//		@ID				get-all-user-followings
//		@Tags			user-followings
//		@Produce		json
//		@Success		200	  {string} string "User removed from followings table successfully"
//	    @Failure        404   {string}    string "Failed to remove user: 404 Error"
//		@Router			todo: /api/following/  [get]
func (fol *FollowingController) removeUserFromFollowings(c *gin.Context, user uint) {
	err := fol.followingService.DeleteAllUserFollowings(user)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to remove user"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"msg": "User removed from followings table successfully"})
}

// CreateFollowings godoc
//
//		@Summary		Creates a Followings relation
//		@ID				create-followings
//		@Tags			followings
//		@Produce		json
//		@Success		200	  {string} string "Following created successfully
//	    @Failure        404   {string}    string "Failed to create following: 404 Error"
//		@Router			todo: /api/following/  [get]
func (fol *FollowingController) CreateFollowings(c *gin.Context, followings *models.Followings) {
	err := fol.followingService.CreateFollowings(followings)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create following"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"msg": "Following created successfully"})
}
