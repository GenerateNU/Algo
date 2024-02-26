package types

import (
	"time"
)

type Model struct {
	ID        uint      `gorm:"primarykey" json:"id" example:"1"`
	CreatedAt time.Time `json:"created_at" example:"2023-09-20T16:34:50Z"`
	UpdatedAt time.Time `json:"updated_at" example:"2023-09-20T16:34:50Z"`
}

type RedirectURLResponse struct {
	RedirectURL string `json:"redirect_url"`
}

type VerifyRequest struct {
	Verifier string `json:"verifier" binding:"required"`
}

type AuthRequest struct {
	Body struct {
		SessionToken string `json:"sessionToken"`
	} `json:"body"`
}

type StatusResponse struct {
	Status string `json:"status"`
}
