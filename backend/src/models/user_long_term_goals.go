package models

import (
	"backend/src/types"
)

type UserLongTermGoals struct {
	types.Model
	UserID         uint          `gorm:"not null" json:"user_id"`
	User           User        	 `gorm:"foreignKey:UserID"`
	LongTermGoalID uint          `json:"long_term_goal_id"`
	LongTermGoal   LongTermGoal  `gorm:"foreignkey:LongTermGoalID"`
}
