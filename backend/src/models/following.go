package models

import (
	"backend/src/types"
	"github.com/jackc/pgx/pgtype"
)

// Following Potential issues
// GORM:  more qualifiers needed?
type Following struct { // There has to be some mapping from this "Following" name to a bad config
	types.Model
	FollowerUserID uint        `gorm:"type:int;" json:"follower_user_id" validate:"required"`
	FollowedUserID uint        `gorm:"type:int;" json:"following_user_id" validate:"required"`
	FollowDate     pgtype.Date `gorm:"type:timestamp" json:"follow_date" validate:"required"`

	FollowerUser User `gorm:"foreignKey:FollowerUserID"`
	FollowedUser User `gorm:"foreignKey:FollowedUserID"`
}
