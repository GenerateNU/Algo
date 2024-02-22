package controllers

import (
	"net/http"
	"strconv"

	"backend/src/models"
	"backend/src/services"

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
func (uc *PostController) GetAllPosts(c *gin.Context) {
	posts, err := uc.postService.GetAllPosts()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch posts"})
		return
	}

	c.JSON(http.StatusOK, posts)
}

// CreatePost godoc
//
//		@Summary		Creates a post
//		@Description	Creates a post
//		@ID				create-post
//		@Tags			post
//		@Accept			json
//		@Produce		json
//		@Param			first_name		body	string	true		"First name of the post"
//		@Param			last_name		body	string	true		"Last name of the post"
//		@Param			postname		body	string	true		"Postname of the post"
//		@Param			email			body	string	true		"Email of the post"
//		@Param			password		body	string	true		"Password of the post"
//		@Success		201	  {object}	  models.Post
//	    @Failure        400   {string}    string "Failed to create post"
//		@Router			/api/posts/  [post]
func (uc *PostController) CreatePost(c *gin.Context) {
	var post models.Post
	if err := c.ShouldBindJSON(&post); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	createdPost, err := uc.postService.CreatePost(&post)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to create post"})
		return
	}

	c.JSON(http.StatusCreated, createdPost)
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
func (uc *PostController) GetPostById(c *gin.Context) {
	id := c.Param("id")
	postID, err := strconv.ParseUint(id, 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid post ID"})
		return
	}

	post, err := uc.postService.GetPostById(uint(postID))
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
func (uc *PostController) UpdatePostById(c *gin.Context) {
	id := c.Param("id")
	postID, _ := strconv.ParseUint(id, 10, 32)
	var post *models.Post
	if err := c.ShouldBindJSON(&post); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	updatedPost, err := uc.postService.UpdatePostById(uint(postID), post)
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
func (uc *PostController) DeletePostById(c *gin.Context) {
	id := c.Param("id")
	postID, _ := strconv.ParseUint(id, 10, 32)
	post, err := uc.postService.DeletePostById(uint(postID))
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Failed to delete post"})
		return
	}

	c.JSON(http.StatusOK, post)
}