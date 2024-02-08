package services

//TODO: Testing

import (
	"backend/src/models"

	"gorm.io/gorm"
)

type FollowingService struct {
	DB *gorm.DB
}

func NewFollowingService(db *gorm.DB) *FollowingService {
	return &FollowingService{
		DB: db,
	}
}

/////////////////////////////////////READ////////////////////////////////////

// GetAllFollowing godoc
// Get the contents of the following table
// TODO: Following documentation
func (fol *FollowingService) GetAllFollowing() ([]models.Following, error) {
	var following []models.Following
	//Q for Ania- How does this work if following uses User instead of int
	if err := fol.DB.Find(&following).Error; err != nil {
		return nil, err
	}
	return following, nil
}

// GetAllUserFollowing Get all users a user is following
func (fol *FollowingService) GetAllUserFollowing(user models.User) ([]models.User, error) {
	var following []models.Following
	//Retrieve all Following relations where the follower user is
	if err := fol.DB.Where(models.Following{FollowerUserID: user}).Find(&following).Error; err != nil {
		return nil, err
	}
	///
	var targetUsers []models.User
	for _, target := range following {
		targetUsers = append(targetUsers, target.FollowedUserID)
	}
	return targetUsers, nil
}

// GetAllUserFollowers
// Get all users a user is following
func (fol *FollowingService) GetAllUserFollowers(user models.User) ([]models.User, error) {
	var following []models.Following
	//Retrieve all Following relations where the follower user is
	if err := fol.DB.Where(models.Following{FollowedUserID: user}).Find(&following).Error; err != nil {
		return nil, err
	}
	var targetUsers []models.User
	for _, target := range following {
		targetUsers = append(targetUsers, target.FollowerUserID)
	}
	return targetUsers, nil
}

////////////////////////////////////////// UPDATE ////////////////////////////////////////////
// ResetTimeStamp? What goes here

// //////////////////////////////////////// CREATE ///////////////////////////////////////////////
// AddFollowsRelation -> Add a following relation to the Following Table
func (fol *FollowingService) CreateFollowing(following *models.Following) (*models.Following, error) {
	if err := fol.DB.Create(fol).Error; err != nil {
		return nil, err
	}
	return following, nil
}

////////////////////////////////////////// DELETE ////////////////////////////////////////////////
// DeleteFollowing -> Delete following relation specifically between two users
// ExciseUser -> Remove all rows with a given User
