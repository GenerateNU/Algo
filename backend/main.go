package main

import (
	"fmt"

	// "backend/src/models" not used yet
	"backend/src/routes"

	_ "backend/docs"

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
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("Failed to connect to database")
	}

	//db.AutoMigrate(&models.User{})

	r := gin.Default()

	routes.SetupUserRoutes(r, db)
	routes.SetupETradeRoutes(r, db)
	routes.SetupAuthRoutes(r, db)

	r.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))

	// Run the server
	port := 8080
	addr := fmt.Sprintf(":%d", port)
	fmt.Printf("Server is running on http://localhost%s\n", addr)
	if err := r.Run(addr); err != nil {
		panic("Failed to start server")
	}
}
