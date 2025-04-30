const { addExpense, calculateTotalExpenses } = require('../src/expenseTracker');
const { expect } = require('chai');

describe('Expense Tracker Tests', () => {
    
    it('should add a new expense correctly', () => {
        const expense = addExpense('2025-04-28', 100, 'Transport', 'Bus ride');
        expect(expense).to.have.property('id');
        expect(expense.amount).to.equal(100);
        expect(expense.category).to.equal('Transport');
        expect(expense.description).to.equal('Bus ride');
    });

    it('should calculate total expenses correctly', () => {
        addExpense('2025-04-28', 100, 'Transport', 'Bus ride');
        addExpense('2025-04-28', 75, 'Food', 'Lunch');

        const total = calculateTotalExpenses('2025-04-01', '2025-04-30');
        expect(total).to.equal(175);
    });

});

