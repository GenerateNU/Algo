package models

import "backend/src/types"

type User struct {
	types.Model
	FirstName         string `gorm:"type:varchar(255);" json:"first_name" validate:"required"`
	LastName          string `gorm:"type:varchar(255);" json:"last_name" validate:"required"`
	Username          string `gorm:"type:varchar(255);unique" json:"username" validate:"required"`
	PassWord          string `gorm:"type:text" json:"pass_word" validate:"required"`
	Email             string `gorm:"type:varchar(255);unique" json:"email" validate:"required,email"`
	RiskTolerance     string `gorm:"type:varchar(255);" json:"risk_tolerance"`
	YearsOfExperience int    `gorm:"type:int;" json:"years_of_experience"`
}
