# Algo
Fullstack application for the Algo project

<!-- Github Actions -->
<a href="https://github.com/GenerateNU/Algo/actions/workflows/CI.yml">
  <img src="https://github.com/GenerateNU/Algo/actions/workflows/CI.yml/badge.svg"
    alt="Workflow Status" />
</a>

## Quick Start

```git clone git@github.com:GenerateNU/Algo.git```

## Set Up Your Development Environment
First, understand the tech stack:

- The database is [PostGreSQL](https://www.postgresql.org/) and will be containerized using [Docker](https://www.docker.com/).
- The backend is [Golang](https://go.dev/) with [Gin](https://gin-gonic.com/)
- The frontend is [ReactNative](https://reactnative.dev/) with [TypeScript](https://www.typescriptlang.org/) and uses [Expo](https://expo.dev/) as a build tool, [React Navigation](https://reactnavigation.org/) for navigation, and [NativeWind](https://www.nativewind.dev) + [React Native Paper](https://reactnativepaper.com/) for styling


Before compiling and running our application, we need to install several languages, package managers, and various tools.
The installation process can vary, so follow the instructions for each item below!

- [Go](https://go.dev/doc/install) - our primary backend language
  - Afterwards, install all go dependencies using `make backend-dep`.
- [yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable) - our package manager in the frontend
  - Afterwards, install all yarn dependencies using `make frontend-dep`.
- [expo-go](https://docs.expo.dev/get-started/expo-go/) - Expo allows mobile
  devices to scan a QR code and view the code running on a mobile device. For development, we will use [expo-cli](https://docs.expo.dev/more/expo-cli/), but this will be installed by the yarn `make frontend-dep` command
- [ngrok](https://ngrok.com/docs/getting-started/) - Allows us to easily connect
  - We recommend making an ngrok account and creating a static domain. This will let you simplify the backend URL tremendously, as otherwise the ngrok link will be randomly generated each time you run it.

If everything was successful, you can now compile and run the project!

### Extra Dependencies
Install these in the backend directory
- go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest
- go install github.com/cosmtrek/air@latest

### Tools
We will be using some tools to make development a bit easier.

- [Swagger](https://github.com/swaggo/swag) - Will allow us to visualize the API and query requests from the database.
- [Makefile](https://opensource.com/article/18/8/what-how-makefile) - Will allow us to easily run scripts by consolidating them into Makefile commands. Make sure to read up about each command and ask questions. You should know what you are running!

If you wish to simulate the app on a phone on your computer, the following will work;
- [Xcode](https://docs.expo.dev/workflow/ios-simulator/) - A simulator to view the code on an iphone from a laptop
- [Android Studio](https://docs.expo.dev/workflow/android-studio-emulator) - An emulator to view the code on an android device from a laptop

### Third party integrations
For this project, we will be using some third-party APIs.

- [Morgan Stanley E-Trade](https://apisb.etrade.com/docs/api/authorization/request_token.html) - Our users will be able to log into their account using SSO. This is where we will pull portfolio data and make trade orders if requested. For testing purposes, we _highly_ recommend opening an E-Trade account. However, we understand money and financial information is highly sensitive, so if you do not feel comfortable opening an account, please let us know.

## Running the project

Before running the project, you must add a .env file at the root directory. To this file, add the variable `EXPO_PUBLIC_API_DOMAIN={your ngrok static domain here}`. This will allow us to expose the development environment to the Internet. AKA, it puts localhost on the web for a short period.

### Docker
We will be containerizing our PostGreSQL database in Docker. Follow the steps below to add the DB to your local machine.

1. Install [Docker](https://docs.docker.com/get-docker/)
You should be able to run `docker` in your terminal if this was successful.
2. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
3. Run `make db-run` from the root directory, this will spin up a postgres image.

### Backend
1. From root directory, run `make backend-run`
2. Once this has succesfuly spun up, run `make backend-ngrok`. This is necessary for connecting to a the different emulators, or your own phone if you download Expo Go.

### Frontend
1. From the root diectory, as long as you've already run `make frontend-dep` recently, run `make frontend-run`. This will start the expo app.
2. Starting an expo app has choices; it comes prepackeged with a QR code, which you can scan to open the app in Expo Go
3. If you want to run the app on your computer, you will need to make sure you spin up the relevant emulator. This is either an Android Studio emulator if you want to run on Android, or an XCode simulator if you want to run on iOS
4. To run on android, press **a**. To run on iOS, press **i**

