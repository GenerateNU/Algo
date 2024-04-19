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
	if err := ps.DB.Preload("User").Find(&posts).Error; err != nil {
		return nil, err
	}
	return posts, nil
}

func (ps *PostService) GetPostsByUserId(userId string) ([]models.Post, error) {
	var posts []models.Post
	if err := ps.DB.Where("user_id = ?", userId).Find(&posts).Error; err != nil {
		return nil, err
	}
	return posts, nil
}

func (ps *PostService) GetPostsFromFollowedUsers(userId string) ([]models.Post, error) {
	var followedUserIDs []string
	if err := ps.DB.Model(&models.Followings{}).Where("follower_user_id = ?", userId).Pluck("following_user_id", &followedUserIDs).Error; err != nil {
		return nil, err
	}

	var posts []models.Post
	for _, id := range followedUserIDs {
		var userPosts []models.Post
		if err := ps.DB.Preload("User").Where("user_id = ?", id).Find(&userPosts).Error; err != nil {
			return nil, err
		}
		posts = append(posts, userPosts...)
	}

	return posts, nil
}

// Abstracted Get Posts Function, Add More Parameters as Needed
func (ps *PostService) GetPostsFromSearch(postContentSearchTerm string) ([]models.Post, error) {
	var posts []models.Post

	// Start with a base query
	query := ps.DB.Model(&models.Post{})

	if postContentSearchTerm != "" {
		postContentSearch := "%" + postContentSearchTerm + "%"
		query = query.Where("ticker_symbol LIKE ? OR comment LIKE ? OR title LIKE ?", postContentSearch, postContentSearch, postContentSearch)
	}

	if err := query.Find(&posts).Error; err != nil {
		return nil, err
	}

	return posts, nil
}

func (ps *PostService) CreateTradePost(userId string, percentData float64, tickerSymbol string, title string, description string) (*models.Post, error) {
	tradePost := &models.Post{
		UserID:       userId,
		NumData:      percentData,
		PostType:     models.RECENT_TRADE,
		TickerSymbol: tickerSymbol,
		Title:        title,
		Comment:      description,
	}

	if err := ps.DB.Create(tradePost).Error; err != nil {
		return nil, err
	}

	return tradePost, nil
}

func (ps *PostService) CreatePortfolioPost(userId string, percentData float64, summaryType string) (*models.Post, error) {
	portfolioPost := &models.Post{
		UserID:   userId,
		NumData:  percentData,
		PostType: models.ONE_MONTH_SUMMARY,
		Title:    "Portfolio Summary",
		Comment:  summaryType,
	}

	if err := ps.DB.Create(portfolioPost).Error; err != nil {
		return nil, err
	}

	return portfolioPost, nil
}

func (ps *PostService) CreateTextPost(userId string, title string, description string) (*models.Post, error) {
	textPost := &models.Post{
		UserID:   userId,
		NumData:  0,
		PostType: models.SHARE_COMMENT,
		Title:    title,
		Comment:  description,
	}

	if err := ps.DB.Create(textPost).Error; err != nil {
		return nil, err
	}

	return textPost, nil
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
