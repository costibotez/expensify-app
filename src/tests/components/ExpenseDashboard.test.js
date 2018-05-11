import React from 'react';
import ExpensifyDashboardPage from '../../components/ExpensifyDashboardPage';
import { shallow } from 'enzyme';

test('should render ExpenseDashboard', () => {
    const wrapper = shallow(<ExpensifyDashboardPage/>);
    expect(wrapper).toMatchSnapshot();
});