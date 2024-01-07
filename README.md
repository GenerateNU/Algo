# Algo
Fullstack application for the Algo project

## Quick Start

> TBD

## Set Up Your Development Environment
First, understand the tech stack:

- The database is [PostGreSQL](https://www.postgresql.org/) and will be containerized using [Docker](https://www.docker.com/).
- The backend is [Golang](https://go.dev/) with [Echo](https://echo.labstack.com/)
- The frontend is [ReactNative](https://reactnative.dev/) with [TypeScript](https://www.typescriptlang.org/) and uses [Expo](https://expo.dev/) as a build tool and [React Navigation](https://reactnavigation.org/)


Before compiling and running our application, we need to install several languages, package managers, and various tools.
The installation process can vary, so follow the instructions for each item below!

- [Go](https://go.dev/doc/install) - our primary backend language
  - Afterwards, install all go dependencies using `make backend-dep`.
- [yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable) - our package manager in the frontend
  - Afterwards, install all yarn dependencies using `make frontend-dep`.

If everything was successful, you can now compile and run the project!

## Extra Dependencies

- go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest

## Running the project

### Docker
1. Install [Docker](https://docs.docker.com/get-docker/)
2. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)


