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

# Run backend
.PHONY: backend-run
backend-run:
	cd backend && go run main.go
