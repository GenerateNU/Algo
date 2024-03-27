package models

import (
	"backend/src/types"
	"time"
)

type PostType string

const (
	ONE_MONTH_SUMMARY PostType = "1 month summary"
	RECENT_TRADE      PostType = "Recent trade"
	SHARE_COMMENT     PostType = "Share comment"
)

type Post struct {
	types.Model
	UserID       string    `gorm:"type:varchar(255);" json:"user_id"`
	User         User      `gorm:"foreignKey:UserID"`
	PostType     PostType  `gorm:"type:post_type_enum;not null" json:"post_type"`
	NumData      float64   `gorm:"not null" json:"num_data"`
	TickerSymbol string    `gorm:"type:varchar(9);" json:"ticker_symbol"`
	TimeStamp    time.Time `gorm:"default:created_at" json:"time_stamp"`
	Comment      string    `gorm:"not null" json:"comment"`
	Title        string    `gorm:"not null" json:"title"`
}
