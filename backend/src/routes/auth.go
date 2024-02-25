package routes

import (
	"backend/src/controllers"
	"backend/src/services"
	"encoding/json"
	"log"
	"net/http"
	"os"

	"github.com/clerkinc/clerk-sdk-go/clerk"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"gorm.io/gorm"
)

func SetupAuthRoutes(router *gin.Engine, db *gorm.DB) clerk.Client {
	authService := services.NewAuthService(db)
	authController := controllers.NewAuthController(authService)

	client, err := SetupClerkStore()
	if err != nil {
		log.Fatal("Error setting up Clerk store")
	}

	authRoutes := router.Group("/auth")
	{
		// Initialize Clerk middleware
		// injectActiveSession := clerk.WithSessionV2(client)
		// router.Use(adaptHTTPHandler(injectActiveSession(http.HandlerFunc(returnActiveSession))))

		authRoutes.POST("/register", func(c *gin.Context) {
			authController.AuthenticateSession(c, client)
		})
		authRoutes.POST("/authenticate", func(c *gin.Context) {
			authController.AuthenticateSession(c, client)
		})
	}

	return client
}

// Initialize Clerk middleware
func SetupAuthMiddleware(client clerk.Client, router *gin.Engine) {
	injectActiveSession := clerk.WithSessionV2(client)
	router.Use(AdaptHTTPHandler(injectActiveSession(http.HandlerFunc(ReturnActiveSession))))
}

func RemoveMiddleware(router *gin.Engine) {
	// Remove the middleware from the router
	router.Use(func(c *gin.Context) {
		// This function will be executed before the routes without the middleware
		c.Next()
	})
}

func SetupClerkStore() (clerk.Client, error) {
	err := godotenv.Load("../.env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	clerkApiSecretKey := os.Getenv("EXPO_PUBLIC_CLERK_SECRET_KEY")
	log.Println(clerkApiSecretKey)
	client, err := clerk.NewClient(clerkApiSecretKey)
	if err != nil {
		return nil, err
	}

	return client, nil
}

func AdaptHTTPHandler(handler http.Handler) gin.HandlerFunc {
	return func(c *gin.Context) {
		handler.ServeHTTP(c.Writer, c.Request)
	}
}

func ReturnActiveSession(w http.ResponseWriter, req *http.Request) {
	sessionClaims, ok := clerk.SessionFromContext(req.Context())
	if ok {
		jsonResp, _ := json.Marshal(sessionClaims)
		log.Println(w, string(jsonResp))
	} else {
		// handle non-authenticated user
		log.Println(w, "No active session found.")
	}
}
