package models

type UserLongTermGoals struct {
	ID             uint         `gorm:"primarykey" json:"id" example:"1"`
	UserID         string       `gorm:"type:varchar(255);" json:"user_id"`
	User           User         `gorm:"foreignKey:UserID"`
	LongTermGoalID uint         `json:"long_term_goal_id"`
	LongTermGoal   LongTermGoal `gorm:"foreignkey:LongTermGoalID"`
}
