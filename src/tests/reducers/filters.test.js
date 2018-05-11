import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should set sortby to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortby to date', () => {
    const defaultState = {
        'text': '',
        'sortBy': 'amount',
        'startDate': moment().startOf('month'),
        'endDate': moment().endOf('month')
    }
    const action = {type: 'SORT_BY_DATE'};
    const state = filtersReducer(defaultState, action);

    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'Car'});
    expect(state.text).toBe('Car');
});

test('should set start date filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: moment(0)});
    expect(state.startDate).toEqual(moment(0));
});

test('should set end date filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: moment(0).add(4, 'days')});
    expect(state.endDate).toEqual(moment(0).add(4, 'days'));
});
