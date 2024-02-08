package models

import (
	"backend/src/types"
)

type ShortTermGoal struct {
	types.Model
	ShortTermGoalName string `gorm:"type:text" json:"short_term_goal_name"`
}