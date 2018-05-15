import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configStore from './store/configureStore';
import './styles/styles.scss';
import 'normalize.css/normalize.css'; 
import 'react-dates/lib/css/_datepicker.css';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configStore();

// store.addExpense()

// console.log(store.getState());
store.subscribe(() => {
    console.log(store.getState());
});
// add static dummy expense data for testing purposes
store.dispatch(addExpense({description: 'Water bill', amount: 4500}));
store.dispatch(addExpense({description: 'Gas bill', amount: 100, createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 1095000}));
store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));