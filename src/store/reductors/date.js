import dayjs from 'dayjs';

const initialState = {
    date: dayjs()
};

const DateReducer = (state = initialState, action) => {

    switch (action.type) {
        default:
            return state
    }
};

export default DateReducer