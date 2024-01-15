# Algo
Fullstack application for the Algo project

## Quick Start

```git clone git@github.com:GenerateNU/Algo.git```

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
- [expo-go](https://docs.expo.dev/get-started/expo-go/) - Expo allows mobile
  devices to scan a QR code and view the code running on a mobile device
- [ngrok](https://ngrok.com/docs/getting-started/) - Allows us to easily connect
  - You may need to run this to authenticate; `ngrok config add-authtoken 2ayIx9Z092NTzK4g6iR635XKtp9_XqbpW4vPEZmzxB6nyRqk`

If everything was successful, you can now compile and run the project!

### Extra Dependencies
Install these in the backend directory
- go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest
- go install github.com/cosmtrek/air@latest

### Tools
We will be using some tools to make development a bit easier.

- [Swagger](https://github.com/swaggo/swag) - Will allow us to visualize the API and query requests from the database.
- [Makefile](https://opensource.com/article/18/8/what-how-makefile) - Will allow us to easily run scripts by consolidating them into Makefile commands. Make sure to read up about each command and ask questions. You should know what you are running!
- [xcode](https://docs.expo.dev/workflow/ios-simulator/) - A simulator to view the code on an iphone from a laptop
- [android studio](https://docs.expo.dev/workflow/android-studio-emulator) - An emulator to view the code on an android device from a laptop

### Third party integrations
For this project, we will be using some third-party APIs.

- [Morgan Stanley E-Trade](https://apisb.etrade.com/docs/api/authorization/request_token.html) - Our users will be able to log into their account using SSO. This is where we will pull portfolio data and make trade orders if requested. For testing purposes, we _highly_ recommend opening an E-Trade account. However, we understand money and financial information is highly sensitive, so if you do not feel comfortable opening an account, please let us know.

## Running the project

### Docker
We will be containerizing our PostGreSQL database in Docker. Follow the steps below to add the DB to your local machine.

1. Install [Docker](https://docs.docker.com/get-docker/)
You should be able to run `docker` in your terminal if this was successful.
2. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
3. Run `docker-compose up` from the root directory, this will spin up a postgres image.

### Backend
1. From root directory, run `make backend-run`

