package routes

import (
	"backend/src/controllers"
	"backend/src/services"

	"github.com/labstack/echo/v4"
)

func UserRoutes(g *echo.Group, userService services.UserServiceInterface) {
	userController := controllers.NewUserController(userService)
}