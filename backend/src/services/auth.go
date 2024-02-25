package services

import (
	"backend/src/models"

	"log"

	"github.com/clerkinc/clerk-sdk-go/clerk"
	"gorm.io/gorm"
)

type AuthService struct {
	DB *gorm.DB
}

func NewAuthService(db *gorm.DB) *AuthService {
	return &AuthService{
		DB: db,
	}
}

func (as *AuthService) Register(user models.User) error {
	return nil
}

func (as *AuthService) AuthenticateSession(client clerk.Client, sessionToken string) (*clerk.User, error) {
	// verify the session
	sessClaims, clerkErr := client.VerifyToken(sessionToken)
	if clerkErr != nil {
		log.Println(clerkErr.Error())
		return nil, clerkErr
	}

	// get the user
	user, clerkErr := client.Users().Read(sessClaims.Claims.Subject)
	if clerkErr != nil {
		log.Println(clerkErr.Error())
		return nil, clerkErr
	}
	return user, nil
}
