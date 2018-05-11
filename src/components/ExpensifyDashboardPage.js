import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpensifyDashboardPage = () => (
    <div>
        <ExpenseListFilters/>
        <p>This is coming from my dashboard</p>
        <ExpenseList/>
    </div>
);

export default ExpensifyDashboardPage;