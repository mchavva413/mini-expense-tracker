const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const { addExpense, viewExpenses, calculateTotalExpenses, deleteExpense, updateExpense } = require('./src/expenseTracker');

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

// View expenses
app.get('/view', (req, res) => {
    const { startDate, endDate } = req.query;
    const expenses = viewExpenses(startDate, endDate);
    res.json(expenses);
});

// Calculate total expenses
app.get('/total', (req, res) => {
    const { startDate, endDate } = req.query;
    const total = calculateTotalExpenses(startDate, endDate);
    res.json({ total });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

