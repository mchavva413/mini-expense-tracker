const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Expenses array must be outside the routes
let expenses = [];

// Home Route
app.get('/', (req, res) => {
  res.send('Welcome to the Mini Expense Tracker API!');
});

// Add a new expense
app.post('/add', (req, res) => {
  const { date, amount, category, description } = req.body;
  const newExpense = {
    id: expenses.length + 1,
    date,
    amount,
    category,
    description
  };
  expenses.push(newExpense);
  res.status(201).json(newExpense);
});

// View all expenses
app.get('/view', (req, res) => {
  res.json(expenses);
});

// Update an expense
app.put('/update/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { amount, description } = req.body;
  const expense = expenses.find(exp => exp.id === id);

  if (expense) {
    if (amount) expense.amount = amount;
    if (description) expense.description = description;
    res.json(true);
  } else {
    res.json(false);
  }
});

// Delete an expense
app.delete('/delete/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = expenses.findIndex(exp => exp.id === id);

  if (index !== -1) {
    expenses.splice(index, 1);
    res.json(true);
  } else {
    res.json(false);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

