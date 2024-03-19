package models

type Leader struct {
	FollowingUserID uint `gorm:"type:int;" json:"following_user_id"`
	FollowerCount   uint `gorm:"type:int;" json:"follower_count"`

	//Must be Preloaded
	FollowingUser User `gorm:"foreignKey:FollowingUserID;references:ID" json:"leader_user"`
}
