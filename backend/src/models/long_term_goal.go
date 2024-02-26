package models

import (
	"backend/src/types"
)

type LongTermGoal struct {
	types.Model
	LongTermGoal string `gorm:"type:text" json:"long_term_goal"`
}
