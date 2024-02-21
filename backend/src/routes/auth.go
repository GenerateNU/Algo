package routes

import (
	"backend/src/controllers"
	"backend/src/services"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/clerkinc/clerk-sdk-go/clerk"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"gorm.io/gorm"
)

func SetupAuthRoutes(router *gin.Engine, db *gorm.DB) {
	authService := services.NewAuthService(db)
	authController := controllers.NewAuthController(authService)

	userRoutes := router.Group("/auth")
	{
		userRoutes.GET("/", authController.AuthenticateSession)
	}
}

func SetupAuthMiddleware(router *gin.Engine) (func(handler http.Handler) http.Handler, error) {
	err := godotenv.Load("../.env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	clerkApiSecretKey := os.Getenv("EXPO_PUBLIC_CLERK_SECRET_KEY")
	fmt.Println(clerkApiSecretKey)
	client, err := clerk.NewClient(clerkApiSecretKey)
	if err != nil {
		return nil, err
	}

	// Initialize Clerk middleware
	injectActiveSession := clerk.WithSessionV2(client)

	// Apply middleware to desired routes or groups (makes all routes require authentication)
	router.Use(adaptHTTPHandler(injectActiveSession(http.HandlerFunc(returnActiveSession))))

	return injectActiveSession, nil
}

func adaptHTTPHandler(handler http.Handler) gin.HandlerFunc {
	return func(c *gin.Context) {
		handler.ServeHTTP(c.Writer, c.Request)
	}
}

func returnActiveSession(w http.ResponseWriter, req *http.Request) {
	sessionClaims, ok := clerk.SessionFromContext(req.Context())
	if ok {
		jsonResp, _ := json.Marshal(sessionClaims)
		fmt.Println(w, string(jsonResp))
	} else {
		// handle non-authenticated user
		fmt.Println(w, "No active session found.")
	}

}

func removeMiddleware(router *gin.Engine) {
	// Remove the middleware from the router
	router.Use(func(c *gin.Context) {
		// Your custom logic here
		// This function will be executed before the routes
		// without the middleware
		c.Next()
	})
}
