package models

import "backend/src/types"

type Position struct {
	types.Model
	UserPortfolioID uint      `gorm:"not null" json:"portfolio_id"`
	PositionID      int       `gorm:"not null" json:"position_id"`
	Ticker          string    `gorm:"not null" json:"ticker"`
	Quantity        int       `gorm:"not null" json:"quantity"`
	Cost            float64   `gorm:"type:numeric(12,2);not null" json:"cost"`
	DayGain         float64   `gorm:"type:numeric(12,2);not null" json:"day_gain"`
	DayGainPct      float64   `gorm:"type:numeric(12,2);not null" json:"day_gain_pct"`
	TotalGain       float64   `gorm:"type:numeric(12,2);not null" json:"total_gain"`
	TotalGainPct    float64   `gorm:"type:numeric(12,2);not null" json:"total_gain_pct"`
	Type            TradeType `gorm:"type:trade_type_enum;not null" json:"type"`
}

// TradeType defines a custom type for trade type enum
type TradeType string

const (
	Long  TradeType = "LONG"
	Short TradeType = "SHORT"
)
