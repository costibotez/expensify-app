import uuid from 'uuid';

// Add Expense
export const addExpense = ({ description = '', notes = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        notes,
        amount,
        createdAt
    }
});

// Remove_expese
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// Edit_expense
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});