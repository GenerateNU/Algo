package models

import "time"

type User struct {
	ID        string    `gorm:"column:id;primaryKey;" json:"id"`
	CreatedAt time.Time `json:"created_at" example:"2023-09-20T16:34:50Z"`
	UpdatedAt time.Time `json:"updated_at" example:"2023-09-20T16:34:50Z"`
	FirstName string    `gorm:"type:varchar(255)" json:"first_name"`
	LastName  string    `gorm:"type:varchar(255)" json:"last_name"`
	Username  string    `gorm:"type:varchar(255);unique" json:"username"`
	ImageURL  string    `gorm:"type:varchar(255)" json:"image_url"`
}
