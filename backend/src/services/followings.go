package services

//TODO: Testing

import (
	"backend/src/models"

	"gorm.io/gorm"
)

////////////////////////////////////// Type Definitions //////////////////////////////////////////////////

type FollowingService struct {
	DB *gorm.DB
}

func NewFollowingService(db *gorm.DB) *FollowingService {
	return &FollowingService{
		DB: db,
	}
}

/////////////////////////////////////READ////////////////////////////////////

// GetAllFollowings godoc
// Gets all Followings relations
func (fol *FollowingService) GetAllFollowings() ([]models.Followings, error) {
	var following []models.Followings
	//Q for Ania- How does this work if following uses User instead of int
	if err := fol.DB.Find(&following).Error; err != nil {
		return nil, err
	}
	return following, nil
}

// GetAllUserFollowings godoc
// Get all users a user is following
// input user -> [user][user][user][user][user][user]
func (fol *FollowingService) GetAllUserFollowings(user models.User) ([]models.User, error) {
	var following []models.Followings
	//Retrieve all Followings relations where the follower user is
	if err := fol.DB.Where(models.Followings{FollowerUser: user}).Find(&following).Error; err != nil {
		return nil, err
	}
	///
	var targetUsers []models.User
	for _, target := range following {
		targetUsers = append(targetUsers, target.FollowedUser)
	}
	return targetUsers, nil
}

// GetAllUserFollowers godoc
// Get all users a user is followed By
// [user][user][user][user][user][user] -> input user
func (fol *FollowingService) GetAllUserFollowers(user models.User) ([]models.User, error) {
	var following []models.Followings
	//Retrieve all Followings relations where the follower user is
	if err := fol.DB.Where(models.Followings{FollowedUser: user}).Find(&following).Error; err != nil {
		return nil, err
	}
	var targetUsers []models.User
	for _, target := range following {
		targetUsers = append(targetUsers, target.FollowerUser)
	}
	return targetUsers, nil
}

// //////////////////////////////////////// CREATE ///////////////////////////////////////////////

// CreateFollowings TODO: Confirm Correct return type: No reason I can think of that Following ID would be needed
// Add a following relation to the Followings Table
func (fol *FollowingService) CreateFollowings(following *models.Followings) error {
	if err := fol.DB.Create(following).Error; err != nil {
		return err
	}
	return nil
}

// //////////////////////////////////////// DELETE ////////////////////////////////////////////////

// DeleteFollowing  go doc
// Deletes following relation specifically between two users
func (fol *FollowingService) DeleteFollowing(follower uint, followed uint) error {
	err := fol.DB.Where("follower_user_id = ? AND following_user_id = ?", follower, followed).Delete(&models.Followings{})
	return err.Error
}

// DeleteAllUserFollowings go doc
//
//	ExciseUser -> Remove all rows with a given User
func (fol *FollowingService) DeleteAllUserFollowings(user uint) error {
	err := fol.DB.Where("follower_user_id = ? OR following_user_id = ?", user, user).Delete(&models.Followings{})
	return err.Error
}
