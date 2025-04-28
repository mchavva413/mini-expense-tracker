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

// View all expenses
app.get('/view', (req, res) => {
  try {
    const expenses = viewExpenses();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete an expense by ID
app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  try {
    deleteExpense(parseInt(id));
    res.status(200).json({ message: 'Expense deleted successfully.' });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Update an expense by ID
app.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const { date, amount, category, description } = req.body;
  try {
    const updatedExpense = updateExpense(parseInt(id), date, amount, category, description);
    res.status(200).json(updatedExpense);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Server listen
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

