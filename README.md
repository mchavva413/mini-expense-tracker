# Mini Expense Tracker API

This project is a simple backend application built with **Node.js** and **Express.js** to track daily expenses.  
It supports basic CRUD operations (Create, Read, Update, Delete) for managing expenses.

## Features
- Add a new expense
- View all expenses by date range
- Update or delete expenses by ID
- Unit testing with Mocha and Chai
- Black-box testing (Boundary Value Analysis and Equivalence Class Partitioning)
- GitHub Actions (CI/CD) setup for automated testing
- Deployed live using Render
- Postman collection created for API testing

## 🔗 Live Application
👉 [Mini Expense Tracker Live on Render](https://mini-expense-tracker-xt4x.onrender.com/)

## 📡 API Endpoints

| Method   | Endpoint       | Description                 |
|----------|----------------|-----------------------------|
| `GET`    | `/`            | Welcome Message             |
| `POST`   | `/add`         | Add a new expense           |
| `GET`    | `/view`        | View all expenses           |
| `PUT`    | `/update/:id`  | Update an expense by ID     |
| `DELETE` | `/delete/:id`  | Delete an expense by ID     |

## 💻 Technologies Used
- Node.js
- Express.js
- Mocha (Unit Testing)
- Chai (Assertions)
- Postman (API Testing)
- Render (Deployment)
- GitHub Actions (CI/CD Automation)

## 🧪 Testing Details

✅ White-box testing (Mocha unit tests)  
✅ Black-box testing:
- Boundary Value Analysis (BVA)
- Equivalence Class Partitioning (ECP)  
✅ Postman used for API verification  
✅ Automated test execution using GitHub Actions  

## 🔄 CI/CD Pipeline

- **CI**: GitHub Actions runs automatically on every push to `main`
- Steps in `.github/workflows/nodejs.yml`:
  - `npm install --no-optional`
  - `npm test`

## 📦 Postman Testing (Black-box)

Postman was used for API testing:
- **BVA example**: amount = 0 (validated)
- **ECP example**: missing category or invalid amount = -10
- All endpoints were tested manually via Postman to ensure correct error handling and response format

---

✅ Ready for presentation and submission!

