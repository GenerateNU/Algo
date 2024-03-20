package models

import "backend/src/types"

type UserPortfolio struct {
	types.Model
	UserID    uint       `gorm:"not null" json:"user_id,omitempty"`
	Positions []Position `gorm:"foreignKey:UserPortfolioID" json:"positions"`
}
