package models

import (
	"backend/src/types"
	"github.com/jackc/pgx/pgtype"
)

// Followings Potential issues
// GORM:  more qualifiers needed?
type Followings struct {
	types.Model

	FollowerUserID uint        `gorm:"type:int;" json:"follower_user_id" validate:"required"`
	FollowedUserID uint        `gorm:"type:int;" json:"followed_user_id" validate:"required"`
	FollowDate     pgtype.Date `gorm:"type:timestamp" json:"follow_date" validate:"required"`

	//Not sure if these will be useful or not, but best to have them?
	FollowerUser User `gorm:"foreignKey:FollowerUserID"`
	FollowedUser User `gorm:"foreignKey:FollowedUserID"`
}
