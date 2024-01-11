package models

import "backend/src/types"

type User struct {
	types.Model
	FirstName string `gorm:"type:varchar(255);unique" json:"first_name" validate:"required"`
	LastName  string `gorm:"type:varchar(255);unique" json:"last_name" validate:"required"`
	Password  string `gorm:"type:text" json:"password" validate:"required"`
	Email     string `gorm:"type:varchar(255);unique" json:"email" validate:"required,email"`
}
