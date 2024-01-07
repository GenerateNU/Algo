package routes

import (
	"backend/src/services"

	"github.com/labstack/echo"
)

func UserRoutes(g *echo.Group, userService services.UserServiceInterface) {
	//userController := controllers.NewUserController(userService)
}
