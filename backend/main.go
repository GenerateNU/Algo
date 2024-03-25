package main

import (
	"fmt"
	"time"

	// "backend/src/models" not used yet
	"backend/src/routes"

	_ "backend/docs"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// @title Algo API
// @version 1.0
// @description API for Algo App
// @BasePath /api
func main() {
	dsn := "host=localhost user=user password=pwd dbname=algo port=5434 sslmode=disable"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{NowFunc: time.Now().UTC})
	if err != nil {
		panic("Failed to connect to database")
	}

	//db.AutoMigrate(&models.User{})

	r := gin.Default()

	// Add CORS middleware
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization", "Access-Control-Allow-Origin", "Access-Control-Allow-Headers", "Access-Control-Allow-Methods"},
		AllowCredentials: true,
	}))

	clerkClient := routes.SetupAuthRoutes(r, db)
	routes.SetupUserRoutes(r, db, clerkClient)
	routes.SetupETradeRoutes(r, db)
	routes.SetupPostRoutes(r, db)
	routes.SetupOnboardingRoutes(r, db)
	routes.SetupFollowingRoutes(r, db)

	r.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))

	// Run the server
	port := 8080
	addr := fmt.Sprintf(":%d", port)
	fmt.Printf("Server is running on http://localhost%s\n", addr)
	if err := r.Run(addr); err != nil {
		panic("Failed to start server")
	}
}
