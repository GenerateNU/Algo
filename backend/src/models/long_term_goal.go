package models

import (
	"backend/src/types"
)

type LongTermGoal struct {
	types.Model
	LongTermGoalName string `gorm:"type:text" json:"long_term_goal_name"`
}
