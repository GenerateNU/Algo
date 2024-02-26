package models

import "time"

// Followings represents a following relationship between two users.
// It defines the structure of a following entry in the database.
type Followings struct {
	FollowerUserID uint      `gorm:"type:int;" json:"follower_user_id" validate:"required"`
	FollowedUserID uint      `gorm:"type:int;" json:"following_user_id" validate:"required"`
	CreatedAt      time.Time `gorm:"type:timestamp" json:"created_at" validate:"required"`

	//User objects: User must be preloaded for gorm reads
	FollowerUser User `gorm:"foreignKey:FollowerUserID;references:ID"`
	FollowedUser User `gorm:"foreignKey:FollowedUserID;references:ID"`
}

// NewFollowings creates a new instance of Followings with the provided follower and followed user IDs.
// It initializes the struct fields and returns a pointer to the newly created Followings object.
func NewFollowings(followerID, followedID uint) *Followings {
	return &Followings{

		FollowerUserID: followerID,
		FollowedUserID: followedID,
	}
}
