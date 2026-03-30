# User Management System

A user management API with automated end-to-end testing.

## 🚀 Technologies

- .NET 8
- PostgreSQL
- Docker
- Cypress
- Faker
- GitHub Actions (CI/CD)

---

## 📦 Features

- Create user
- Get users
- Update user
- Delete user

---

## 🧪 Testing

End-to-end tests using Cypress covering:

- Full CRUD flow
- API response validation
- Dynamic data generation with Faker

---

## ⚙️ Running the project locally

### 1. Start database

```bash
docker-compose up -d
```

### 2. Run API

```bash
cd backend/UserManagement.API
dotnet run
```

Swagger available at:

```bash
http://localhost:5205/swagger
```

### 3. Run tests

```bash
npm install
npm run cy:run
```

or interactive mode:

```bash
npm run cy:open
```

---

## 🔄 CI/CD

Automated pipeline using GitHub Actions:

- Build the application
- Run database migrations
- Execute Cypress tests

---

## 🎯 Purpose

This project was created to practice:

- Backend development with .NET
- Test automation (QA)
- Continuous Integration
- Clean architecture and best practices

---

## 👨‍💻 Author

Vinicius Bacca

---
