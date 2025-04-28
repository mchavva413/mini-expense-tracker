# Mini Expense Tracker API

This project is a simple backend application built with **Node.js** and **Express.js** to manage daily expenses.  
It supports basic CRUD operations, calculates total expenses, and includes white-box and black-box testing with automated CI/CD setup.

## Features
- Add a new expense
- View all expenses
- Update an existing expense
- Delete an expense
- Calculate total expenses
- Unit testing with Mocha and Chai
- Black-box testing (Boundary Value Analysis and Equivalence Class Partitioning)
- GitHub Actions CI/CD setup for automated testing
- Deployed live using Render
- Postman collection created for API testing

## Live Application
👉 [Mini Expense Tracker Live on Render](https://mini-expense-tracker-xt4x.onrender.com/)

## API Endpoints

| Method | Endpoint | Description |
|:------|:---------|:------------|
| `GET` | `/` | Welcome Message |
| `POST` | `/add` | Add a new expense |
| `GET` | `/view` | View all expenses |
| `PUT` | `/update/:id` | Update an expense by ID |
| `DELETE` | `/delete/:id` | Delete an expense by ID |

## Technologies Used
- Node.js
- Express.js
- Mocha (Unit Testing)
- Chai (Assertions)
- Postman (API Testing)
- Render (Deployment)
- GitHub Actions (CI/CD Automation)

## Testing Details
- ✅ White-box testing (Mocha unit tests)
- ✅ Black-box testing:
  - Boundary Value Analysis (BVA)
  - Equivalence Class Partitioning (ECP)
- ✅ Postman used for API verification
- ✅ Automated test execution using GitHub Actions


