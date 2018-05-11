// we can't include moment from moment because will trigger a stack overflow
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
};