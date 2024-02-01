package controllers

import (
	"net/http"

	"backend/src/services"

	"github.com/gin-gonic/gin"
)

type FollowingController struct {
	followingService *services.FollowingService
}

func NewFollowingController(followingService *services.FollowingService) *FollowingController {
	return &FollowingController{
		followingService: followingService,
	}
}