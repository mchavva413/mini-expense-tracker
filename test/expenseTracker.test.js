const { expect } = require('chai');
const { addExpense, viewExpenses, calculateTotalExpenses, deleteExpense, updateExpense } = require('../src/expenseTracker');

describe('Expense Tracker Tests', () => {

    it('should add a valid expense', () => {
        const expense = addExpense('2025-04-28', 50, 'Food', 'Lunch');
        expect(expense).to.have.property('id');
        expect(expense.amount).to.equal(50);
    });

    it('should throw error on invalid expense input', () => {
        expect(() => addExpense('', -10, '', '')).to.throw('Invalid input');
    });

    it('should view expenses in date range', () => {
        const expenses = viewExpenses('2025-04-01', '2025-04-30');
        expect(expenses.length).to.be.at.least(1);
    });

    it('should calculate total expenses in date range', () => {
        const total = calculateTotalExpenses('2025-04-01', '2025-04-30');
        expect(total).to.be.at.least(50);
    });

    it('should delete an expense', () => {
        const result = deleteExpense(1);
        expect(result).to.equal(true);
    });

    it('should update an expense', () => {
        const expense = addExpense('2025-04-28', 70, 'Transport', 'Taxi');
        const result = updateExpense(expense.id, { amount: 80 });
        expect(result).to.equal(true);
    });

});

