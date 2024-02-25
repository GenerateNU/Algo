package models

import (
	"backend/src/types"
)

type ShortTermGoal struct {
	types.Model
	ShortTermGoal string `gorm:"type:text" json:"short_term_goal"`
}
