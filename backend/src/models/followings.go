package models

import (
	"backend/src/types"
)

// Followings represents a following relationship between two users.
// It defines the structure of a following entry in the database.
type Followings struct {
	types.Model
	FollowerUserID  string `gorm:"type:varchar(255);" json:"follower_user_id" validate:"required"`
	FollowingUserID string `gorm:"type:varchar(255);" json:"following_user_id" validate:"required"`
	FollowerUser    User   `gorm:"foreignKey:FollowerUserID;references:ID"`
	FollowingUser   User   `gorm:"foreignKey:FollowingUserID;references:ID"`
}

// NewFollowings creates a new instance of Followings with the provided follower and followed user IDs.
// It initializes the struct fields and returns a pointer to the newly created Followings object.
func NewFollowings(followerID, followingdID string) *Followings {
	return &Followings{

		FollowerUserID:  followerID,
		FollowingUserID: followingdID,
	}
}
