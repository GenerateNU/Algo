package models

type TrendingUser struct {
	UserID string `gorm:"type:varchar(255);" json:"user_id"`
	// Retrieve from positions
	DayGainPct float64 `gorm:"type:numeric(12,2);not null" json:"day_gain_pct"`

	//Must be Preloaded
	TrendingUserReference User `gorm:"foreignKey:UserID;references:ID" json:"trending_user_reference"`
}

func NewTrendingUser(userID string, gainPCT float64) *TrendingUser {
	return &TrendingUser{
		UserID:     userID,
		DayGainPct: gainPCT,
	}
}
