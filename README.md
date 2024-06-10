# Cheeseria API

This project is a Node.js API for managing cheeseria products and prices, built with Express and MySQL. It also uses Sequelize as the ORM and Liquibase for database migrations.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Environment Variables](#environment-variables)
- [Docker](#docker)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/cheeseria-api.git
    cd cheeseria-api
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Set up your MySQL database and configure the connection settings in `src/config/db.ts`.

## Usage

1. Start the application:
    ```sh
    npm start
    ```

2. The API will be running at `http://localhost:5000`.

## Testing

1. To run the tests, use:
    ```sh
    npm test
    ```

## Project Structure

```plaintext
.
├── dist/                         # Compiled JavaScript files
├── src/                          # Source TypeScript files
│   ├── config/                   # Database configuration
│   ├── controllers/              # API controllers
│   ├── models/                   # Sequelize models
│   ├── repositories/             # Data access logic
│   ├── routes/                   # Express routes
│   ├── app.ts                    # Express app setup
│   └── server.ts                 # Server setup
├── tests/                        # Test setup and mocks
├── .gitignore                    # Git ignore file
├── changelog.yaml                # Liquibase changelog
├── docker-compose.yaml           # Docker Compose configuration
├── dockerfile                    # Dockerfile
├── jest.config.js                # Jest configuration
├── mysql-connector-j-8.4.0.jar   # MySQL connector for Liquibase
├── package-lock.json             # NPM lock file
├── package.json                  # NPM package file
└── tsconfig.json                 # TypeScript configuration
```

## API Documentation
The API documentation is generated using Swagger. You can access it at http://localhost:5000/api-docs.

### Endpoints
GET /api/cheeses: Get all cheeses

### Environment Variables
The following environment variables are used in the project:

PORT: The port the application runs on (default: 5000)
NODE_ENV: The environment the application is running in (e.g., development, test, production)

## Docker
### Using Docker Compose
Build and start the containers

```sh
docker-compose up
```
The API will be running at http://localhost:5001.

### Using Dockerfile
Build the Docker image:
```sh
docker build -t cheeseria-api .
```

