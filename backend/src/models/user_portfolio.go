package models

import "backend/src/types"

type UserPortfolio struct {
	types.Model
	UserID       string     `gorm:"type:varchar(255)" json:"user_id,omitempty"`
	DayGain      float64    `gorm:"type:numeric(12,2);not null" json:"day_gain,omitempty"`
	DayGainPct   float64    `gorm:"type:numeric(12,2);not null" json:"day_gain_pct,omitempty"`
	TotalGain    float64    `gorm:"type:numeric(12,2);not null" json:"total_gain,omitempty"`
	TotalGainPct float64    `gorm:"type:numeric(12,2);not null" json:"total_gain_pct,omitempty"`
	Positions    []Position `gorm:"foreignKey:UserPortfolioID" json:"positions"`
}
