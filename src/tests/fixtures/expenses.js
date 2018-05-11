import moment from 'moment';

export default [{
    id: '1',
    description: 'Car',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).add(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Water',
    note: '',
    amount: 149500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}];