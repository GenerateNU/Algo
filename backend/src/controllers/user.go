package controllers

import (
	"net/http"
	"strconv"

	"backend/src/models"
	"backend/src/services"

	"github.com/gin-gonic/gin"
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
//	@Summary		Gets all users
//	@Description	Returns all users
//	@ID				get-all-users
//	@Tags			user
//	@Produce		json
//	@Success		200	{object}	[]models.User
//	@Failure		404	{string}	string	"Failed to fetch users"
//	@Router			/api/users/  [get]
func (uc *UserController) GetAllUsers(c *gin.Context) {
	users, err := uc.userService.GetAllUsers()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch users"})
		return
	}

	c.JSON(http.StatusOK, users)
}

// CreateUser godoc
//
//		@Summary		Creates a user
//		@Description	Creates a user
//		@ID				create-user
//		@Tags			user
//		@Accept			json
//		@Produce		json
//		@Param			first_name		body	string	true		"First name of the user"
//		@Param			last_name		body	string	true		"Last name of the user"
//		@Param			username		body	string	true		"Username of the user"
//		@Param			email			body	string	true		"Email of the user"
//		@Param			password		body	string	true		"Password of the user"
//		@Success		201	  {object}	  models.User
//	    @Failure        400   {string}    string "Failed to create user"
//		@Router			/api/users/  [post]
func (uc *UserController) CreateUser(c *gin.Context) {
	var user models.User
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	createdUser, err := uc.userService.CreateUser(&user)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to create user"})
		return
	}

	c.JSON(http.StatusCreated, createdUser)
}

// GetUserById godoc
//
//		@Summary		Gets a user by id
//		@Description	Returns a user by id
//		@ID				get-user-by-id
//		@Tags			user
//		@Produce		json
//		@Param			id		path	int	true		"ID of the user"
//		@Success		200	  {object}	  models.User
//	    @Failure        404   {string}    string "Failed to fetch user"
//		@Router			/api/users/{id}  [get]
func (uc *UserController) GetUserById(c *gin.Context) {
	id := c.Param("id")
	userID, err := strconv.ParseUint(id, 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid user ID"})
		return
	}

	user, err := uc.userService.GetUserById(uint(userID))
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Failed to fetch user"})
		return
	}

	c.JSON(http.StatusOK, user)
}

// UpdateUserById godoc
//
//		@Summary		Updates a user by id
//		@Description	Updates a user by id
//		@ID				update-user-by-id
//		@Tags			user
//		@Accept			json
//		@Produce		json
//		@Param			id		path	int	true		"ID of the user"
//		@Param			first_name		body	string	true		"First name of the user"
//		@Param			last_name		body	string	true		"Last name of the user"
//		@Param			username		body	string	true		"Username of the user"
//		@Param			email			body	string	true		"Email of the user"
//		@Param			password		body	string	true		"Password of the user"
//		@Success		200	  {object}	  models.User
//	    @Failure        400   {string}    string "Failed to update user"
//		@Router			/api/users/{id}  [put]
func (uc *UserController) UpdateUserById(c *gin.Context) {
	id := c.Param("id")
	userID, _ := strconv.ParseUint(id, 10, 32)
	var user *models.User
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	updatedUser, err := uc.userService.UpdateUserById(uint(userID), user)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to update user"})
		return
	}

	c.JSON(http.StatusOK, updatedUser)
}

// DeleteUserById godoc
//
//		@Summary		Deletes a user by id
//		@Description	Deletes a user by id
//		@ID				delete-user-by-id
//		@Tags			user
//		@Produce		json
//		@Param			id		path	int	true		"ID of the user"
//		@Success		200	  {object}	  models.User
//	    @Failure        404   {string}    string "Failed to delete user"
//		@Router			/api/users/{id}  [delete]
func (uc *UserController) DeleteUserById(c *gin.Context) {
	id := c.Param("id")
	userID, _ := strconv.ParseUint(id, 10, 32)
	user, err := uc.userService.DeleteUserById(uint(userID))
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Failed to delete user"})
		return
	}

	c.JSON(http.StatusOK, user)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CreateShortTermGoalForUser godoc
//
//	@Summary        Creates a short-term goal for a user
//	@Description    Adds a new short-term goal associated with a specific user ID
//	@ID             create-short-term-goal-for-user
//	@Tags           usershorttermgoals
//	@Accept         json
//	@Produce        json
//	@Param          user_id       path      int                    true  "User ID"
//	@Param          body          body      {short_term_goal:string} true "Short Term Goal"
//	@Success        200           {object}  models.UserShortTermGoal
//	@Failure        400           {string}  string "Invalid request parameters"
//	@Failure        500           {string}  string "Failed to create short-term goal"
//	@Router         /api/users/{user_id}/create-short-term-goal [post]
func (uc *UserController) CreateShortTermGoalForUser(c *gin.Context) {
	var input struct {
		ShortTermGoalID uint `json:"short_term_goal"`
	}
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request parameters"})
		return
	}

	userID, err := strconv.ParseUint(c.Param("user_id"), 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request parameters"})
		return
	}

	goal, err := uc.userService.CreateShortTermGoalForUser(uint(userID), input.ShortTermGoalID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create short-term goal"})
		return
	}

	c.JSON(http.StatusOK, goal)
}

// GetShortTermGoalsForUser godoc
//
//	@Summary        Gets all short-term goals for a user
//	@Description    Returns all short-term goals associated with a specific user ID
//	@ID             get-short-term-goals-for-user
//	@Tags           usershorttermgoals
//	@Accept         json
//	@Produce        json
//	@Param          id   path      int  true  "User ID"
//	@Success        200  {object}  []models.UserShortTermGoal
//	@Failure        404  {string}  string "Failed to fetch short-term goals"
//	@Router         /api/users/{id}/short-term-goals [get]
func (uc *UserController) GetShortTermGoalsForUser(c *gin.Context) {
	id, err := strconv.ParseUint(c.Param("user_id"), 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid user ID"})
		return
	}

	userShortTermGoals, err := uc.userService.GetShortTermGoalsForUser(uint(id))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch short-term goals"})
		return
	}

	c.JSON(http.StatusOK, userShortTermGoals)
}

// UpdateShortTermGoalForUser godoc
//
// @Summary        Updates a short-term goal for a user
// @Description    Updates an existing short-term goal associated with a specific user ID by goal ID
// @ID             update-short-term-goal-for-user
// @Tags           usershorttermgoals
// @Accept         json
// @Produce        json
// @Param          user_id       path      int     true  "User ID"
// @Param          goal_id       path      int     true  "Goal ID"
// @Param          body          body      {short_term_goal:string} true "Updated Short Term Goal"
// @Success        200           {object}  models.UserShortTermGoals
// @Failure        400           {string}  string "Invalid request parameters"
// @Failure        403           {string}  string "User does not have permission to update this goal"
// @Failure        500           {string}  string "Failed to update short-term goal"
// @Router         /api/users/{user_id}/update-short-term-goal/{goal_id} [put]
func (uc *UserController) UpdateShortTermGoalForUser(c *gin.Context) {
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
		ShortTermGoalID uint `json:"short_term_goal_id"`
	}
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request parameters"})
		return
	}

	updatedGoal, err := uc.userService.UpdateShortTermGoalForUser(uint(userID), uint(goalID), input.ShortTermGoalID)
	if err != nil {
		if err.Error() == "User does not have permission to update this goal" {
			c.JSON(http.StatusForbidden, gin.H{"error": "User does not have permission to update this goal"})
		} else {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update short-term goal"})
		}
		return
	}

	c.JSON(http.StatusOK, updatedGoal)
}

// DeleteShortTermGoalForUser godoc
//
// @Summary        Deletes a short-term goal for a user
// @Description    Deletes an existing short-term goal associated with a specific user ID by goal ID
// @ID             delete-short-term-goal-for-user
// @Tags           usershorttermgoals
// @Accept         json
// @Produce        json
// @Param          user_id       path      int     true  "User ID"
// @Param          goal_id       path      int     true  "Goal ID"
// @Success        204           {string}  string "No Content"
// @Failure        400           {string}  string "Invalid request parameters"
// @Failure        403           {string}  string "User does not have permission to delete this goal"
// @Failure        500           {string}  string "Failed to delete short-term goal"
// @Router         /api/users/{user_id}/delete-short-term-goal/{goal_id} [delete]
func (uc *UserController) DeleteShortTermGoalForUser(c *gin.Context) {
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

	if err := uc.userService.DeleteShortTermGoalForUser(uint(userID), uint(goalID)); err != nil {
		if err.Error() == "User does not have permission to delete this goal" {
			c.JSON(http.StatusForbidden, gin.H{"error": "User does not have permission to delete this goal"})
		} else {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete short-term goal"})
		}
		return
	}

	c.Status(http.StatusNoContent)
}

// OnbaordUser godoc
//
//	@Summary		Onboards a user
//	@Description	Returns the onboarded user
//	@ID				onboard-user
//	@Tags			user
//	@Produce		json
//	@Success		200	{object}	[]models.User
//	@Failure		404	{string}	string	"Failed to onboard user"
//	@Router			/api/users/  [get]
func (uc *UserController) OnboardUser(c *gin.Context) {
	var input struct {
		User           models.User            `json:"user"`
		ShortTermGoals []models.ShortTermGoal `json:"short_term_goals"`
		LongTermGoals  []models.LongTermGoal  `json:"long_term_goals"`
	}

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request parameters"})
		return
	}

	user, err := uc.userService.OnboardUser(&input.User, input.ShortTermGoals, input.LongTermGoals)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to onboard user"})
		return
	}

	c.JSON(http.StatusOK, user)
}
