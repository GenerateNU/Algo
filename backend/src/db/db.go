package db

import (
	"algo/configuration"
	"fmt"
	"os"

	"github.com/jackc/pgx"
)

func ConnectPosgresDatabase(settings configuration.Settings) *pgx.Conn {
	db_url, exists := os.LookupEnv("DATABASE_URL")

	cfg := pgx.ConnConfig{
		User:     settings.Database.Username,
		Database: settings.Database.DatabaseName,
		Password: settings.Database.Password,
		Host:     settings.Database.Host,
		Port:     settings.Database.Port,
	}
	var err error
	if exists {
		cfg, err = pgx.ParseConnectionString(db_url)

		if err != nil {
			panic(err)
		}
	}

	conn, err := pgx.Connect(cfg)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}

	return conn
}