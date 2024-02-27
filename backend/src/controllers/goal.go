package controllers

import (
	"net/http"

	"backend/src/services"

	"github.com/gin-gonic/gin"
)

type GoalController struct {
	goalService *services.GoalService
}

func NewGoalController(goalService *services.GoalService) *GoalController {
	return &GoalController{
		goalService: goalService,
	}
}

// GetShortTermGoals godoc
//
//	@Summary		Gets short term goals
//	@Description	Returns short term goals
//	@ID				get-short-term-goals
//	@Tags			short-term-goals
//	@Produce		json
//	@Success		200	{object}	[]models.ShortTermGoal
//	@Failure		404	{string}	string	"Failed to fetch short term goals"
//	@Router			/api/onboarding/short-term-goals  [get]
func (oc *GoalController) GetShortTermGoals(c *gin.Context) {
	shortTermGoals, err := oc.goalService.GetShortTermGoals()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch short term goals"})
		return
	}

	c.JSON(http.StatusOK, shortTermGoals)
}

// GetLongTermGoals godoc
//
//	@Summary		Gets long term goals
//	@Description	Returns long term goals
//	@ID				get-long-term-goals
//	@Tags			long-term-goals
//	@Produce		json
//	@Success		200	{object}	[]models.LongTermGoal
//	@Failure		404	{string}	string	"Failed to fetch long term goals"
//	@Router			/api/onboarding/short-term-goals  [get]
func (oc *GoalController) GetLongTermGoals(c *gin.Context) {
	longTermGoals, err := oc.goalService.GetLongTermGoals()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch long term goals"})
		return
	}

	c.JSON(http.StatusOK, longTermGoals)
}
