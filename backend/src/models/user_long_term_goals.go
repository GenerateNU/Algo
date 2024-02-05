package models

import (
	"backend/src/types"
)

type LongTermGoal string

const (
	GainFollowers          		LongTermGoal = "Gain followers"
	SaveForRetirement      		LongTermGoal = "Save for retirement"
	SaveForChildrensEducation 	LongTermGoal = "Save for children’s education"
	SaveForDownPayment   	  	LongTermGoal = "Save for a down payment"
)

type UserLongTermGoals struct {
	types.Model
	LongTermGoal  LongTermGoal  `gorm:"type:varchar(100);not null" json:"long_term_goal"`
	UserID        uint          `gorm:"not null" json:"user_id" validate:"required"`
	User       	  User			`gorm:"foreignKey:UserID" validate:"required"`
}