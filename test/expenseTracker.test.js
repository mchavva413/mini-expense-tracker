const { addExpense, calculateTotalExpenses, expenses } = require('../src/expenseTracker');
const { expect } = require('chai');

describe('Expense Tracker Tests', () => {
  beforeEach(() => {
    // Clear the expenses array before each test
    expenses.length = 0;
  });

  // Whitebox Test Cases
  it('should add a new expense correctly', () => {
    const expense = addExpense('2025-04-28', 100, 'Transport', 'Bus ride');
    expect(expense.amount).to.equal(100);
    expect(expense.category).to.equal('Transport');
  });

  it('should calculate total expenses correctly', () => {
    addExpense('2025-04-28', 100, 'Transport', 'Bus ride');
    addExpense('2025-04-28', 75, 'Food', 'Lunch');
    const total = calculateTotalExpenses();
    expect(total).to.equal(175);
  });

  // Blackbox Test Cases (BVA and ECP)
  it('should add an expense with minimum valid amount', () => {
    const expense = addExpense('2025-04-29', 1, 'Misc', 'Small item');
    expect(expense.amount).to.equal(1);
  });

  it('should throw error if amount is zero', () => {
    expect(() => addExpense('2025-04-29', 0, 'Misc', 'Invalid')).to.throw('Invalid input');
  });

  it('should accept a valid category', () => {
    const expense = addExpense('2025-04-29', 50, 'Groceries', 'Fruits');
    expect(expense.category).to.equal('Groceries');
  });

  it('should throw error if category is missing', () => {
    expect(() => addExpense('2025-04-29', 50, '', 'No category')).to.throw('Invalid input');
  });
});

