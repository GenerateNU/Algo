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

func (fol *FollowingService) GetAllFollowing() ([]models.Following, error) {
	var following []models.Following
	if err := fol.DB.Find(&following).Error; err != nil {
		return nil, err
	}
	return following, nil
}
