package models

import (
	"backend/src/types"
	"github.com/jackc/pgx/pgtype"
)

// Following Potential issues
// GORM:  more qualifiers needed?
type Following struct {
	types.Model
	FollowerUserID User        `gorm:"type:int;" json:"follower_user_id" validate:"required"`
	FollowedUserID User        `gorm:"type:int;" json:"following_user_id" validate:"required"`
	FollowDate     pgtype.Date `gorm:"type:timestamp" json:"follow_date" validate:"required"`
}
