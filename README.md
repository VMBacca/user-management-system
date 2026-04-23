# User Management System

A complete user management API with automated end-to-end testing and a fully reproducible environment using Docker.

---

## Demo

### 🐳 Docker Setup

![Docker](assets/docker.gif)

### 🧪 Running Tests

![Tests](assets/cypress.gif)

---

## Overview

This project provides a RESTful API for managing users, including full CRUD operations, automated database migrations, and end-to-end testing.

It is designed to be **easy to run on any machine** with minimal setup.

---

## Technologies

- .NET 8
- PostgreSQL
- Docker & Docker Compose
- Cypress (E2E testing)
- Faker (test data generation)
- Entity Framework Core
- GitHub Actions (CI/CD)

---

## Features

- Create user
- Get users
- Update user
- Delete user
- Automatic database migrations
- Fully automated tests

---

## Architecture

- ASP.NET Core Web API
- Entity Framework Core for data access
- PostgreSQL as relational database
- Cypress for E2E and API testing
- Docker for environment reproducibility
- GitHub Actions for CI/CD

---

## Design Decisions

- Used EF Core migrations for automatic schema management
- Adopted Docker to ensure consistent environments
- Implemented E2E tests to validate full system behavior

---

## Running the Project

### 1️⃣ Clone the repository

```bash
git clone https://github.com/VMBacca/user-management-system.git
cd user-management-system
```

---

### 2️⃣ Start the database (Docker)

```bash
docker-compose up -d
```

This will:

- Start PostgreSQL
- Expose it on port `5432`
- Automatically create the database

---

### 3️⃣ Run the API

```bash
cd backend/UserManagement.API
dotnet run
```

The API will be available at:

```
http://localhost:5205
```

Swagger UI:

```
http://localhost:5205/swagger
```

---

## Running Tests

### Install dependencies

```bash
npm install
```

---

### Run tests (headless)

```bash
npx cypress run
```

---

### Open Cypress UI (interactive)

```bash
npx cypress open
```

---

## Test Coverage

The Cypress tests cover:

- User creation
- User retrieval
- User update
- User deletion
- API response validation
- Dynamic test data using Faker

---

## Key Highlights

- ✅ Fully reproducible environment with Docker
- ✅ Automatic database migrations on startup
- ✅ No manual setup required
- ✅ Clean and simple API design
- ✅ End-to-end testing included

---

## CI/CD

The project includes a GitHub Actions pipeline that:

- Builds the application
- Starts the database
- Runs migrations
- Executes Cypress tests

---

## Project Structure

```
backend/
  └── UserManagement.API

cypress/
  ├── e2e/
  └── support/

docker-compose.yml
```

---

## Purpose

This project was built to practice and demonstrate:

- Backend development with .NET
- Test automation (QA mindset)
- API design
- Docker-based environments
- Continuous Integration

---

## Author

**Vinicius Bacca**

---

## Final Notes

This project is designed to be cloned and run without additional configuration.

If you encounter any issues, ensure:

- Docker is running
- Port `5432` is available
- Port `5205` is available
