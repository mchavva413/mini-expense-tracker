const { expect } = require('chai');
const {
  addExpense,
  viewExpenses,
  calculateTotalExpenses,
  deleteExpense,
  updateExpense,
  expenses
} = require('../src/expenseTracker'); // ✅ Corrected path

describe('Expense Tracker Tests', () => {
  beforeEach(() => {
    expenses.length = 0; // Clear array before each test
  });

  it('should add a valid expense', () => {
    const exp = addExpense("2025-04-30", 50, "Food", "Lunch");
    expect(exp.amount).to.equal(50);
    expect(expenses).to.have.lengthOf(1);
  });

  it('should reject expense with amount 0', () => {
    expect(() => addExpense("2025-04-30", 0, "Food", "Error")).to.throw();
  });

  it('should calculate total correctly', () => {
    addExpense("2025-04-30", 20, "Food", "Lunch");
    addExpense("2025-04-30", 30, "Travel", "Bus");
    const total = calculateTotalExpenses();
    expect(total).to.equal(50);
  });
});

