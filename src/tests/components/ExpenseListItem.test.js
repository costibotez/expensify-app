import React from 'react';
import ExpenseListItem from '../../components/ExpenseListItem';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem with expenses', () => {
    const component = (
        <div>
            {expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense}/>
            })}
        </div>
    );
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
});