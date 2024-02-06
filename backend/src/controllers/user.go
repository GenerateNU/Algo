package controllers

import (
	"net/http"

	"backend/src/services"

	"github.com/gin-gonic/gin"

	"strconv"
)

type UserController struct {
	userService *services.UserService
}

func NewUserController(userService *services.UserService) *UserController {
	return &UserController{
		userService: userService,
	}
}

// GetAllUsers godoc
//
//		@Summary		Gets all users
//		@Description	Returns all users
//		@ID				get-all-users
//		@Tags			user
//		@Produce		json
//		@Success		200	  {object}	  []models.User
//	    @Failure        404   {string}    string "Failed to fetch users"
//		@Router			/api/users/  [get]
func (uc *UserController) GetAllUsers(c *gin.Context) {
	users, err := uc.userService.GetAllUsers()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch users"})
		return
	}

	c.JSON(http.StatusOK, users)
}

// CreateLongTermGoalForUser godoc
//
//	@Summary        Creates a long-term goal for a user
//	@Description    Adds a new long-term goal associated with a specific user ID
//	@ID             create-long-term-goal-for-user
//	@Tags           userlongtermgoals
//	@Accept         json
//	@Produce        json
//	@Param          user_id       path      int                    true  "User ID"
//	@Param          body          body      {long_term_goal:string} true "Long Term Goal"
//	@Success        200           {object}  models.UserLongTermGoal
//	@Failure        400           {string}  string "Invalid request parameters"
//	@Failure        500           {string}  string "Failed to create long-term goal"
//	@Router         /api/users/{user_id}/create-long-term-goal [post]
func (uc *UserController) CreateLongTermGoalForUser(c *gin.Context) {
	var input struct {
		LongTermGoalID uint `json:"long_term_goal"`
	}
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request parameters"})
		return
	}

	userID, err := strconv.ParseUint(c.Param("user_id"), 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid user ID"})
		return
	}

	goal, err := uc.userService.CreateLongTermGoalForUser(uint(userID), input.LongTermGoalID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create long-term goal"})
		return
	}

	c.JSON(http.StatusOK, goal)
}

// GetLongTermGoalsForUser godoc
//
//	@Summary        Gets all long-term goals for a user
//	@Description    Returns all long-term goals associated with a specific user ID
//	@ID             get-long-term-goals-for-user
//	@Tags           userlongtermgoals
//	@Accept         json
//	@Produce        json
//	@Param          id   path      int  true  "User ID"
//	@Success        200  {object}  []models.UserLongTermGoal
//	@Failure        404  {string}  string "Failed to fetch long-term goals"
//	@Router         /api/users/{id}/long-term-goals [get]
func (uc *UserController) GetLongTermGoalsForUser(c *gin.Context) {
	id, err := strconv.ParseUint(c.Param("user_id"), 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid user ID"})
		return
	}

	userLongTermGoals, err := uc.userService.GetLongTermGoalsForUser(uint(id))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch long-term goals"})
		return
	}

	c.JSON(http.StatusOK, userLongTermGoals)
}

// UpdateLongTermGoalForUser godoc
//
// @Summary        Updates a long-term goal for a user
// @Description    Updates an existing long-term goal associated with a specific user ID by goal ID
// @ID             update-long-term-goal-for-user
// @Tags           userlongtermgoals
// @Accept         json
// @Produce        json
// @Param          user_id       path      int     true  "User ID"
// @Param          goal_id       path      int     true  "Goal ID"
// @Param          body          body      {long_term_goal:string} true "Updated Long Term Goal"
// @Success        200           {object}  models.UserLongTermGoals
// @Failure        400           {string}  string "Invalid request parameters"
// @Failure        403           {string}  string "User does not have permission to update this goal"
// @Failure        500           {string}  string "Failed to update long-term goal"
// @Router         /api/users/{user_id}/update-long-term-goal/{goal_id} [put]
func (uc *UserController) UpdateLongTermGoalForUser(c *gin.Context) {
	userID, err := strconv.ParseUint(c.Param("user_id"), 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid user ID"})
		return
	}

	goalID, err := strconv.ParseUint(c.Param("goal_id"), 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid goal ID"})
		return
	}

	var input struct {
		LongTermGoalID uint `json:"long_term_goal_id"`
	}
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request parameters"})
		return
	}

	updatedGoal, err := uc.userService.UpdateLongTermGoalForUser(uint(userID), uint(goalID), input.LongTermGoalID)
	if err != nil {
		if err.Error() == "User does not have permission to update this goal" {
			c.JSON(http.StatusForbidden, gin.H{"error": "User does not have permission to update this goal"})
		} else {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update long-term goal"})
		}
		return
	}

	c.JSON(http.StatusOK, updatedGoal)
}

// DeleteLongTermGoalForUser godoc
//
// @Summary        Deletes a long-term goal for a user
// @Description    Deletes an existing long-term goal associated with a specific user ID by goal ID
// @ID             delete-long-term-goal-for-user
// @Tags           userlongtermgoals
// @Accept         json
// @Produce        json
// @Param          user_id       path      int     true  "User ID"
// @Param          goal_id       path      int     true  "Goal ID"
// @Success        204           {string}  string "No Content"
// @Failure        400           {string}  string "Invalid request parameters"
// @Failure        403           {string}  string "User does not have permission to delete this goal"
// @Failure        500           {string}  string "Failed to delete long-term goal"
// @Router         /api/users/{user_id}/delete-long-term-goal/{goal_id} [delete]
func (uc *UserController) DeleteLongTermGoalForUser(c *gin.Context) {
	userID, err := strconv.ParseUint(c.Param("user_id"), 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid user ID"})
		return
	}

	goalID, err := strconv.ParseUint(c.Param("goal_id"), 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid goal ID"})
		return
	}

	if err := uc.userService.DeleteLongTermGoalForUser(uint(userID), uint(goalID)); err != nil {
		if err.Error() == "User does not have permission to delete this goal" {
			c.JSON(http.StatusForbidden, gin.H{"error": "User does not have permission to delete this goal"})
		} else {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete long-term goal"})
		}
		return
	}

	c.Status(http.StatusNoContent)
}
