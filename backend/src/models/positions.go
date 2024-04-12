package models

import "backend/src/types"

type Position struct {
	types.Model
	UserPortfolioID uint      `gorm:"not null" json:"portfolio_id,omitempty"`
	PositionID      int       `gorm:"not null" json:"position_id,omitempty"`
	Ticker          string    `gorm:"not null" json:"ticker,omitempty"`
	Quantity        int       `gorm:"not null" json:"quantity,omitempty"`
	Cost            float64   `gorm:"type:numeric(12,2);not null" json:"cost,omitempty"`
	DayGain         float64   `gorm:"type:numeric(12,2);not null" json:"day_gain,omitempty"`
	DayGainPct      float64   `gorm:"type:numeric(12,2);not null" json:"day_gain_pct,omitempty"`
	TotalGain       float64   `gorm:"type:numeric(12,2);not null" json:"total_gain,omitempty"`
	TotalGainPct    float64   `gorm:"type:numeric(12,2);not null" json:"total_gain_pct,omitempty"`
	Type            TradeType `gorm:"type:trade_type_enum;not null" json:"type,omitempty"`
}

// TradeType defines a custom type for trade type enum
type TradeType string

const (
	Long  TradeType = "LONG"
	Short TradeType = "SHORT"
)
