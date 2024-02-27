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

func (ps *PostService) GetAllPosts() ([]models.Post, error) {
	var posts []models.Post
	if err := ps.DB.Find(&posts).Error; err != nil {
		return nil, err
	}
	return posts, nil
}

func (ps *PostService) GetPostsByUserId(userId uint) ([]models.Post, error) {
	var posts []models.Post
	if err := ps.DB.Where("user_id = ?", userId).Find(&posts).Error; err != nil {
		return nil, err
	}
	return posts, nil
}

//TODO: Add GetPostsFromFollowedUsers once Cam is done

func (ps *PostService) CreatePost(post *models.Post) (*models.Post, error) {
	if err := ps.DB.Create(post).Error; err != nil {
		return nil, err
	}
	return post, nil
}

func (ps *PostService) GetPostById(id uint) (*models.Post, error) {
	post := &models.Post{}
	if err := ps.DB.First(post, id).Error; err != nil {
		return nil, err
	}
	return post, nil
}

func (ps *PostService) UpdatePostById(id uint, post *models.Post) (*models.Post, error) {
	// Retrieve the existing post from the database
	_, err := ps.GetPostById(id)
	if err != nil {
		return nil, err
	}

	// Save the updated post back to the database
	if err := ps.DB.Save(post).Error; err != nil {
		return nil, err
	}

	return post, nil
}

func (ps *PostService) DeletePostById(id uint) (*models.Post, error) {
	post := &models.Post{}
	if err := ps.DB.Delete(post, id).Error; err != nil {
		return nil, err
	}
	return post, nil
}