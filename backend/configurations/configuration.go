package configuration

import (
	"fmt"
	"os"
	"path/filepath"
	"runtime"

	"github.com/spf13/viper"
)

type Settings struct {
	Database DatabaseSettings `yaml:"database"`
}

type DatabaseSettings struct {
	Username     string `yaml:"username"`
	Password     string `yaml:"password"`
	Port         uint16 `yaml:"port"`
	Host         string `yaml:"host"`
	DatabaseName string `yaml:"databasename"`
	RequireSSL   bool   `yaml:"requiressl"`
}

type Environment string

const (
	EnvironmentLocal      Environment = "local"
	EnvironmentProduction Environment = "production"
)

var (
	_, b, _, _ = runtime.Caller(0)
	basepath   = filepath.Dir(b)
)

func GetConfiguration() (Settings, error) {
	v := viper.New()
	v.SetConfigType("yaml")
	v.AddConfigPath(basepath)

	var settings Settings

	var environment Environment
	if env := os.Getenv("GITHUB_ACTIONS"); env != "" {
		environment = Environment("github")
	} else {
		environment = "local"
	}

	v.SetConfigName(string(environment))

	if err := v.ReadInConfig(); err != nil {
		return settings, fmt.Errorf("failed to read %s configuration: %w", "local", err)
	}

	if err := v.Unmarshal(&settings); err != nil {
		return settings, fmt.Errorf("failed to unmarshal configuration: %w", err)
	}

	return settings, nil
}
