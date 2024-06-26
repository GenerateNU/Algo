package controllers

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
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch users", "msg": err})
		return
	}

	c.JSON(http.StatusOK, followings)
}

// GetTimeline godoc
//
// @Summary Gets all users followed by an input user
// @ID get-all-user-followings
// @Tags user-followings
// @Produce json
// @Success 200 {object} []models.Users
// @Failure 404 {string} string "Failed to fetch followers: 404 Error"
// @Router  /api/following/ [get]
func (fol *FollowingController) GetTimeline(c *gin.Context) {
	user := c.Param("follower_user_id")

	followings, err := fol.followingService.GetTimeline(user)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch users"})
		return
	}

	c.JSON(http.StatusOK, followings)
}

// GetFollowers godoc
//
// @Summary Gets all users following an input user
// @ID get-all-user-followers
// @Tags user-followings
// @Produce json
// @Param followed_user_id path uint true "ID of the user being followed"
// @Success 200 {object} []models.Users
// @Failure 404 {string} string "Failed to fetch followers: 404 Error"
// @Router /api/followers/{followed_user_id} [get]
func (fol *FollowingController) GetFollowers(c *gin.Context) {
	user := c.Param("following_user_id")

	followings, err := fol.followingService.GetFollowers(user)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch users"})
		return
	}

	c.JSON(http.StatusOK, followings)
}

// GetLeaders godoc
//
// @Summary Gets the 10 users with the most followers
// @ID get-leaders
// @Tags user-followings
// @Produce json
// @Success 200 {object} []models.Leaders
// @Failure 404 {string} string "Failed to fetch leaders: 404 Error"
// @Router /api/leaders [get]
func (fol *FollowingController) GetLeaders(c *gin.Context) {
	leaders, err := fol.followingService.GetLeaders()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch users", "msg": err})
		return
	}
	c.JSON(http.StatusOK, leaders)
}

//////////////////////////////////////////Create////////////////////////////////////////

// CreateFollowings godoc
//
// @Summary Creates a Followings relation
// @ID create-followings
// @Tags followings
// @Accept json
// @Produce json
// @Param request body CreateFollowingsRequest true "Request body for creating a Followings relation"
// @Success 200 {string} string "Following created successfully"
// @Failure 400 {string} string "Bad Request"
// @Failure 500 {string} string "Internal Server Error"
// @Router /api/followings/ [post]
func (fol *FollowingController) CreateFollowings(c *gin.Context) {

	// Define Struct for JSON binding
	var requestBody struct {
		Follower string `json:"follower_user_id"`
		Followed string `json:"following_user_id"`
	}
	// Bind the JSON body to the struct
	if err := c.ShouldBindJSON(&requestBody); err != nil {
		// If there was an error parsing the JSON, return a Bad Request
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error(), "type": "json encoding"})
		return
	}

	// Create a new Followings instance
	following := models.NewFollowings(requestBody.Follower, requestBody.Followed)

	// Call following service
	var err = fol.followingService.CreateFollowings(following)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create following Here", "extra info": err})
		return
	}
	//Success
	c.JSON(http.StatusOK, gin.H{"msg": "Following created successfully"})
}

// UnfollowUser godoc
//
// @Summary Unfollows a user
// @ID unfollowUser
// @Tags followings
// @Produce json
// @Param follower_user_id path uint true "ID of the follower user"
// @Param followed_user_id path uint true "ID of the user to unfollow"
// @Success 200 {string} string "User unfollowed successfully"
// @Failure 404 {string} string "Failed to unfollow user: 404 Error"
// @Router /api/followings/{follower_user_id}/{followed_user_id} [delete]
func (fol *FollowingController) UnfollowUser(c *gin.Context) {

	// Convert follower_user_id and followed_user_id to uint
	follower := c.Param("follower_user_id")
	followed := c.Param("following_user_id")

	err := fol.followingService.DeleteFollowing(follower, followed)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to unfollow user", "error info": err})
		return
	}

	c.JSON(http.StatusOK, gin.H{"msg": "User unfollowed successfully"})
}
