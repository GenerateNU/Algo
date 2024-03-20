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

func (ps *PostService) GetPostsFromFollowedUsers(userId uint) ([]models.Post, error) {
	var followedUserIDs []uint
    if err := ps.DB.Model(&models.Followings{}).Where("follower_user_id = ?", userId).Pluck("following_user_id", &followedUserIDs).Error; err != nil {
        return nil, err
    }

	var posts []models.Post
	for _, id := range followedUserIDs {
		var userPosts []models.Post
		if err := ps.DB.Where("user_id = ?", id).Find(&userPosts).Error; err != nil {
			return nil, err
		}
		posts = append(posts, userPosts...)
	}

	return posts, nil
}


// Abstracted Get Posts Function, Add More Parameters as Needed
func (ps *PostService) GetPostsFromSearch(userNameSearchTerm string, postContentSearchTerm string) ([]models.Post, error) {
    var posts []models.Post

    // Start with a base query
    query := ps.DB.Model(&models.Post{})

	if userNameSearchTerm != "" {
		var userIDs []uint
		userNameSearch := "%" + userNameSearchTerm + "%"
		if err := ps.DB.Model(&models.User{}).
			Where("username LIKE ? OR first_name LIKE ? OR last_name LIKE ?", userNameSearch, userNameSearch, userNameSearch).
			Pluck("id", &userIDs).Error; err != nil {
			return nil, err
		}

		query = query.Where("user_id IN (?)", userIDs)
	}

	if postContentSearchTerm != "" {
		postContentSearch := "%" + postContentSearchTerm + "%"
		query = query.Where("post_type = ? OR ticker_symbol LIKE ? OR comment LIKE ? OR title LIKE ?", models.PostType(postContentSearchTerm), postContentSearch, postContentSearch, postContentSearch)
	}

	/*
	// Filter posts by PostType if postType is not empty
    if postType != "" {
        query = query.Where("post_type = ?", postType)
    }

	if tickerSymbolSearchTerm != "" {
		query = query.Where("ticker_symbol = ?", tickerSymbolSearchTerm)
	}

	if commentSearchTerm != "" {
		query = query.Where("comment LIKE ?", "%"+commentSearchTerm+"%")
	}

    // Filter posts by searchTerm in their name if searchTerm is not empty
    if titleSearchTerm != "" {
        query = query.Where("title LIKE ?", "%"+titleSearchTerm+"%")
    }
	*/

	/*
    if ofFollowedOnly {
        // Get the list of followed user IDs
        var followedUserIDs []uint
        if err := ps.DB.Model(&models.Followings{}).Where("follower_user_id = ?", userId).Pluck("following_user_id", &followedUserIDs).Error; err != nil {
            return nil, err
        }

        // Filter posts by followed user IDs
        query = query.Where("user_id IN (?)", followedUserIDs)
    }
	*/

    // Execute the query
    if err := query.Find(&posts).Error; err != nil {
        return nil, err
    }

    return posts, nil
}


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