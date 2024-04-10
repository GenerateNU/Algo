package models

import (
	"time"
)

type Portfolio struct {
	types.Model
	ID             int64     `json:"id"`
	CreatedAt      time.Time `json:"created_at"`
	UpdatedAt      time.Time `json:"updated_at"`
	UserID         string    `json:"user_id"`
	DayGain        float64   `json:"day_gain"`
	DayGainPct     float64   `json:"day_gain_pct"`
	TotalGain      float64   `json:"total_gain"`
	TotalGainPct   float64   `json:"total_gain_pct"`
}
