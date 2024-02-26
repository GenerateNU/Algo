package models

type UserShortTermGoals struct {
	ID              uint          `gorm:"primarykey" json:"id" example:"1"`
	UserID          uint          `gorm:"not null" json:"user_id"`
	User            User          `gorm:"foreignKey:UserID"`
	ShortTermGoalID uint          `json:"short_term_goal_id"`
	ShortTermGoal   ShortTermGoal `gorm:"foreignkey:ShortTermGoalID"`
}
