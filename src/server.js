const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const { addExpense, viewExpenses, calculateTotalExpenses, deleteExpense, updateExpense } = require('./expenseTracker');

// Middleware to parse JSON body
app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Mini Expense Tracker API!');
});

// Add a new expense
app.post('/add', (req, res) => {
  const { date, amount, category, description } = req.body;
  try {
    const expense = addExpense(date, amount, category, description);
    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Final step ➡️ LISTEN (start server)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

