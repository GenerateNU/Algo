package controllers

import (
	"net/http"
	"strconv"

	"fmt"

	"backend/src/models"
	"backend/src/services"
	"backend/src/types"

	"github.com/gin-gonic/gin"
)

type PostController struct {
	postService *services.PostService
}

func NewPostController(postService *services.PostService) *PostController {
	return &PostController{
		postService: postService,
	}
}

// GetAllPosts godoc
//
//	@Summary		Gets all posts
//	@Description	Returns all posts
//	@ID				get-all-posts
//	@Tags			post
//	@Produce		json
//	@Success		200	{object}	[]models.Post
//	@Failure		404	{string}	string	"Failed to fetch posts"
//	@Router			/api/posts/  [get]
func (pc *PostController) GetAllPosts(c *gin.Context) {
	posts, err := pc.postService.GetAllPosts()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch posts"})
		return
	}

	c.JSON(http.StatusOK, posts)
}

// GetPostsByUserId godoc
//
//	@Summary		Gets posts by user ID
//	@Description	Returns all posts for a specific user by user ID
//	@ID				get-posts-by-user-id
//	@Tags			post
//	@Produce		json
//	@Param			user_id	path	uint	true	"User ID"
//	@Success		200		{object}	[]models.Post
//	@Failure		404		{string}	string	"Failed to fetch posts"
//	@Router			/api/posts/user/{user_id} [get]
func (pc *PostController) GetPostsByUserId(c *gin.Context) {
	userId := c.Param("user_id")

	posts, err := pc.postService.GetPostsByUserId(userId)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Failed to fetch posts"})
		return
	}

	c.JSON(http.StatusOK, posts)
}

// GetPostsFromFollowedUsers godoc
//
// @Summary Gets posts from followed users
// @Description Returns all posts from users followed by the specified user ID
// @ID get-posts-from-followed-users
// @Tags post
// @Produce json
// @Param user_id path uint true "User ID"
// @Success 200 {object} []models.Post
// @Failure 404 {string} string "Failed to fetch posts"
// @Router /api/posts/followed/{user_id} [get]
func (pc *PostController) GetPostsFromFollowedUsers(c *gin.Context) {
	userId := c.Param("user_id")

	posts, err := pc.postService.GetPostsFromFollowedUsers(userId)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Failed to fetch posts"})
		return
	}

	c.JSON(http.StatusOK, posts)
}

// GetPostsFromSearch godoc
//
// @Summary Gets posts based on filters
// @Description Retrieves posts based on following status, search term, and post type.
// @ID get-posts
// @Tags post
// @Produce json
// @Param userId path uint true "User ID"
// @Param tickerSymbolSearchTerm query string false "Search term for post ticker symbol"
// @Param ofFollowedOnly query bool false "Flag to filter posts by followed users only"
// @Param titleSearchTerm query string false "Search term for post title"
// @Param commentSearchTerm query string false "Search term for post comment"
// @Param postType query string false "Filter by post type"
// @Success 200 {object} []models.Post
// @Failure 400 {string} string "Invalid parameters"
// @Failure 404 {string} string "Failed to fetch posts"
// @Router /api/posts [get]
func (pc *PostController) GetPostsFromSearch(c *gin.Context) {
	postContentSearchTerm := c.Query("query")

	posts, err := pc.postService.GetPostsFromSearch(postContentSearchTerm)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Failed to fetch posts"})
		return
	}

	c.JSON(http.StatusOK, posts)
}

// CreateTradePost godoc
func (pc *PostController) CreateTradePost(c *gin.Context) {
	var req types.CreateTradePostRequest
	if err := c.BindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	userId := c.Param("user_id")

	fmt.Println(req.Title, req.Description)

	tradePost, err := pc.postService.CreateTradePost(userId, req.PercentData, req.TickerSymbol, req.Title, req.Description)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to create post"})
		return
	}

	c.JSON(http.StatusCreated, tradePost)
}

// CreatePortfolioPost godoc
func (pc *PostController) CreatePortfolioPost(c *gin.Context) {
	var req types.CreatePortfolioPostRequest
	if err := c.BindJSON(&req); err != nil {
		fmt.Println(err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}
	
	userId := c.Param("user_id")
	
	portfolioPost, err := pc.postService.CreatePortfolioPost(userId, req.PercentData, req.SummaryType)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to create post"})
		return
	}

	c.JSON(http.StatusCreated, portfolioPost)
}

// CreateTextPost godoc
func (pc *PostController) CreateTextPost(c *gin.Context) {
	var req types.CreateTextPostRequest
	if err := c.BindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	userId := c.Param("user_id")

	textPost, err := pc.postService.CreateTextPost(userId, req.Title, req.Description)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to create post"})
		return
	}

	c.JSON(http.StatusCreated, textPost)
}

// GetPostById godoc
//
//		@Summary		Gets a post by id
//		@Description	Returns a post by id
//		@ID				get-post-by-id
//		@Tags			post
//		@Produce		json
//		@Param			id		path	int	true		"ID of the post"
//		@Success		200	  {object}	  models.Post
//	    @Failure        404   {string}    string "Failed to fetch post"
//		@Router			/api/posts/{id}  [get]
func (pc *PostController) GetPostById(c *gin.Context) {
	id := c.Param("id")
	postID, err := strconv.ParseUint(id, 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid post ID"})
		return
	}

	post, err := pc.postService.GetPostById(uint(postID))
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Failed to fetch post"})
		return
	}

	c.JSON(http.StatusOK, post)
}

// UpdatePostById godoc
//
//		@Summary		Updates a post by id
//		@Description	Updates a post by id
//		@ID				update-post-by-id
//		@Tags			post
//		@Accept			json
//		@Produce		json
//		@Param			id		path	int	true		"ID of the post"
//		@Param			first_name		body	string	true		"First name of the post"
//		@Param			last_name		body	string	true		"Last name of the post"
//		@Param			postname		body	string	true		"Postname of the post"
//		@Param			email			body	string	true		"Email of the post"
//		@Param			password		body	string	true		"Password of the post"
//		@Success		200	  {object}	  models.Post
//	    @Failure        400   {string}    string "Failed to update post"
//		@Router			/api/posts/{id}  [put]
func (pc *PostController) UpdatePostById(c *gin.Context) {
	id := c.Param("id")
	postID, _ := strconv.ParseUint(id, 10, 32)
	var post *models.Post
	if err := c.ShouldBindJSON(&post); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	updatedPost, err := pc.postService.UpdatePostById(uint(postID), post)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to update post"})
		return
	}

	c.JSON(http.StatusOK, updatedPost)
}

// DeletePostById godoc
//
//		@Summary		Deletes a post by id
//		@Description	Deletes a post by id
//		@ID				delete-post-by-id
//		@Tags			post
//		@Produce		json
//		@Param			id		path	int	true		"ID of the post"
//		@Success		200	  {object}	  models.Post
//	    @Failure        404   {string}    string "Failed to delete post"
//		@Router			/api/posts/{id}  [delete]
func (pc *PostController) DeletePostById(c *gin.Context) {
	id := c.Param("id")
	postID, _ := strconv.ParseUint(id, 10, 32)
	post, err := pc.postService.DeletePostById(uint(postID))
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Failed to delete post"})
		return
	}

	c.JSON(http.StatusOK, post)
}
