package main

import (
	"algo/backend/src/db"
	"fmt"
	"os"

	_ "algo/backend/docs"

	swaggerFiles "github.com/swaggo/files"
)

// @title Algo API
// @version 1.0
// @description API for Algo App
// @BasePath /api
func main() {
	config, err := template.GetConfiguration()

	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to retreive configuration file: %v\n", err)
		os.Exit(1)
	}

	conn := db.ConnectPosgresDatabase(config)

	defer conn.Close()

	v1 := r.Group("/")
	{
		medication.GetMedicationGroup(v1, &medication.PgModel{Conn: conn})
		//...
	}

	r.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
	err = r.Run(":8080")

	if err != nil {
		fmt.Fprintf(os.Stderr, "%v\n", err)
		os.Exit(1)
	}
}
