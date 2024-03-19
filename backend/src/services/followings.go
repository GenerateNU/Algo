package services

import (
	"backend/src/models"

	"gorm.io/gorm"
)

// FollowingService represents a service for managing followings in carbon.
//
// It contains a reference to the algo db.
type FollowingService struct {
	DB *gorm.DB
}

// NewFollowingService creates a new instance of FollowingService with the provided GORM database instance.
//
// Parameters:
//   - db: A pointer to a GORM database instance used for data access and manipulation.
//
// Returns:
//   - A pointer to the newly created FollowingService instance.
func NewFollowingService(db *gorm.DB) *FollowingService {
	return &FollowingService{
		DB: db,
	}
}

// GetAllFollowings retrieves all Followings relations from the database.
//
// This method queries the database to fetch all Followings relations, including details about the follower and followed users.
//
// Returns:
//   - A slice of Followings models containing the retrieved Followings relations.
//   - An error if any database operation fails.
func (fol *FollowingService) GetAllFollowings() ([]models.Followings, error) {

	var following []models.Followings
	if err := fol.DB.Preload("FollowingUser").Preload("FollowingUser").Find(&following).Error; err != nil {
		return nil, err
	}
	return following, nil
}

// GetLeaders retrieves the users with the most followers
//
// This method queries the database to fetch all Followings relations, including details about the follower and followed users.
//
// Returns:
//   - A slice of User models containing the retrieved User relations.
//   - An error if any database operation fails.
//
// Finish writing this sql query in the below Gorm function
// SQL Equivalent:
// SELECT followed
// FROM followings
// GROUP BY followed
// ORDER BY COUNT(*) DESC;

// TODO
func (fol *FollowingService) GetLeaders() ([]models.User, error) {

	var followingSlice []models.Leader

	if err := fol.DB.Table("followings").
		//Preload("FollowerUser").
		Preload("FollowingUser").
		Select("following_user_id, COUNT(*) as appearance_count").
		Group("following_user_id").
		Order("appearance_count DESC").
		Limit(10).
		Find(&followingSlice).Error; err != nil {
		return nil, err
	}

	var leaders []models.User

	for _, leader := range followingSlice {
		leaders = append(leaders, leader.FollowingUser)
	}
	return leaders, nil
}

// GetTimeline retrieves all followings where the specified user is the follower.
//
// This method queries the database to fetch all followings where the given user is the follower,
// and returns the list of users being followed by the specified user (the target users).
//
// Parameters:
//   - user: The ID of the user whose timeline is being retrieved.
//
// Returns:
//   - A slice of User models representing the users being followed by the specified user (the target users).
//   - An error if any database operation fails.
func (fol *FollowingService) GetTimeline(user string) ([]models.User, error) {
	var following []models.Followings
	//Retrieve all Followings relations where the follower user is
	if err := fol.DB.Preload("FollowerUser").Preload("FollowingUser").Where("follower_user_id = ?", user).Find(&following).Error; err != nil {
		return nil, err
	}
	///
	var targetUsers []models.User
	for _, target := range following {
		targetUsers = append(targetUsers, target.FollowingUser)
	}
	return targetUsers, nil
}

// GetFollowers retrieves all users who are following the specified user.
//
// This method queries the database to fetch all followings where the specified user is being followed,
// and returns the list of users who are following the specified user (the followers).
//
// Parameters:
//   - user: The ID of the user whose followers are being retrieved.
//
// Returns:
//   - A slice of User models representing the users who are following the specified user (the followers).
//   - An error if any database operation fails.
func (fol *FollowingService) GetFollowers(user string) ([]models.User, error) {
	var following []models.Followings
	//Retrieve all Followings relations where the follower user is
	if err := fol.DB.Preload("FollowerUser").Preload("FollowingUser").Where("following_user_id = ?", user).Find(&following).Error; err != nil {
		return nil, err
	}

	var targetUsers []models.User
	for _, target := range following {
		targetUsers = append(targetUsers, target.FollowerUser)
	}
	return targetUsers, nil
}

/////////////////////////////////Create///////////////////////////////////////////

// CreateFollowings adds a new following relation to the Followings table.
//
// This method inserts a new following relation into the Followings table based on the provided Followings model.
//
// Parameters:
//   - following: A pointer to the Followings model representing the following relation to be added.
//
// Returns:
//   - An error if any database operation fails.
func (fol *FollowingService) CreateFollowings(following *models.Followings) error {
	if err := fol.DB.Create(following).Error; err != nil {
		return err
	}
	return nil
}

//////////////////////////////Delete//////////////////////////////////////////////

// DeleteFollowing deletes a specific following relation between two users.
//
// This method removes the following relation between the specified follower and followed users from the Followings table.
//
// Parameters:
//   - follower: The ID of the follower user.
//   - followed: The ID of the followed user.
//
// Returns:
//   - An error if any database operation fails.
func (fol *FollowingService) DeleteFollowing(follower string, followed string) error {
	err := fol.DB.Where("follower_user_id = ? AND following_user_id = ?", follower, followed).Delete(&models.Followings{})
	return err.Error
}
