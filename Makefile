# Installing frontend dependencies
.PHONY: frontend-dep
frontend-dep:
	cd frontend && yarn install

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

