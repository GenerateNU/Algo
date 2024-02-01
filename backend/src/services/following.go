package services

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