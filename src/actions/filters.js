// Set_text_filer
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// Sort by value
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});

// Sort by amount
export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});

// Set start date
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// set end date
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});