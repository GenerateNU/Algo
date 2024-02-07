package models

//TODO: Figure out what I'm doing here

import "backend/src/types"

// Unique tags for ID's?
//Should I be looking up users here? Or sufficient to store ID's

type Following struct {
	types.Model
	FollowerID  int    `gorm:"type:int;unique" json:"first_name" validate:"required"`
	FollowingID int    `gorm:"type:int;unique" json:"last_name" validate:"required"`
	FollowDate  string `gorm:"type:timestamp" json:"follow_date" validate:"required"`
	Email       string `gorm:"type:varchar(255);unique" json:"email" validate:"required,email"`
}
