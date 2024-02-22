package services

import (
	"backend/src/models"

	"gorm.io/gorm"
)

type PostService struct {
	DB *gorm.DB
}

func NewPostService(db *gorm.DB) *PostService {
	return &PostService{
		DB: db,
	}
}

func (us *PostService) GetAllPosts() ([]models.Post, error) {
	var posts []models.Post
	if err := us.DB.Find(&posts).Error; err != nil {
		return nil, err
	}
	return posts, nil
}

//TODO: Add GetAllPostsFromFollowing once Cam is done

func (us *PostService) CreatePost(post *models.Post) (*models.Post, error) {
	if err := us.DB.Create(post).Error; err != nil {
		return nil, err
	}
	return post, nil
}

func (us *PostService) GetPostById(id uint) (*models.Post, error) {
	post := &models.Post{}
	if err := us.DB.First(post, id).Error; err != nil {
		return nil, err
	}
	return post, nil
}

func (us *PostService) UpdatePostById(id uint, post *models.Post) (*models.Post, error) {
	// Retrieve the existing post from the database
	_, err := us.GetPostById(id)
	if err != nil {
		return nil, err
	}

	// Save the updated post back to the database
	if err := us.DB.Save(post).Error; err != nil {
		return nil, err
	}

	return post, nil
}

func (us *PostService) DeletePostById(id uint) (*models.Post, error) {
	post := &models.Post{}
	if err := us.DB.Delete(post, id).Error; err != nil {
		return nil, err
	}
	return post, nil
}