package models

import (
	"backend/src/types"
)

type UserShortTermGoals struct {
	types.Model
	UserID         	uint         	`gorm:"not null" json:"user_id"`
	User           	User         	`gorm:"foreignKey:UserID"`
	ShortTermGoalID uint          	`json:"short_term_goal_id"`
	ShortTermGoal   ShortTermGoal 	`gorm:"foreignkey:ShortTermGoalID"`
}
