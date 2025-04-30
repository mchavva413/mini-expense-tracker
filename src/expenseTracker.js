let expenses = [];
let nextId = 1;

function addExpense(date, amount, category, description) {
  if (!date || !amount || !category) {
    throw new Error('Invalid input');
  }
  const expense = {
    id: nextId++,
    date,
    amount,
    category,
    description
  };
  expenses.push(expense);
  return expense;
}

function viewExpenses(startDate, endDate) {
  return expenses.filter(exp => {
    const expDate = new Date(exp.date);
    return expDate >= new Date(startDate) && expDate <= new Date(endDate);
  });
}

function calculateTotalExpenses() {
  return expenses.reduce((sum, exp) => sum + exp.amount, 0);
}

function deleteExpense(id) {
  const index = expenses.findIndex(exp => exp.id === id);
  if (index !== -1) {
    expenses.splice(index, 1);
    return true;
  }
  return false;
}

function updateExpense(id, newDetails) {
  const expense = expenses.find(exp => exp.id === id);
  if (expense) {
    Object.assign(expense, newDetails);
    return true;
  }
  return false;
}

// ✅ Export all functions + the expenses array
module.exports = { addExpense, viewExpenses, calculateTotalExpenses, deleteExpense, updateExpense, expenses };

