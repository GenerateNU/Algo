include .env
export

# Installing frontend dependencies
.PHONY: frontend-dep
frontend-dep:
	cd frontend && yarn install

# running the frontend
.PHONY: frontend-run
frontend-run:
	cd frontend && yarn start

# Lint the frontend source code
.PHONY: frontend-lint
frontend-lint:
	cd frontend && yarn lint

# Format the frontend source code
.PHONY: frontend-format
frontend-format:
	cd frontend && yarn format

# Installing backend dependencies
.PHONY: backend-dep
backend-dep:
	cd backend && go get .

# Lint backend source code
.PHONY: backend-lint
backend-lint:
	cd backend && golangci-lint run

# Format backend source code
.PHONY: backend-format
backend-format:
	cd backend && go fmt

# Build the docker db
.PHONY: backend-docker
backend-docker:
	docker-compose up

# Run backend
.PHONY: backend-run
backend-run:
	cd backend && go run main.go

# convert the backend link to an ngrok link
.PHONY: backend-ngrok
backend-ngrok:
	@echo ${EXPO_PUBLIC_API_DOMAIN}
	cd backend && ngrok http --domain=${EXPO_PUBLIC_API_DOMAIN} 8080

# Test the backend
.PHONY: backend-test 
backend-test:
	cd backend
