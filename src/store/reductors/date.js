import dayjs from 'dayjs';
import * as actionsTypes from '../actions/actionsTypes';

const initialState = {
    date: dayjs()
};

const DateReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionsTypes.NEXT_WEEK:
        case actionsTypes.PREV_WEEK:
        case actionsTypes.NEXT_DAY:
        case actionsTypes.PREV_DAY:     {
            return {
                ...state,
                date: action.payload
            }
        }
        default:
            return state
    }
};

export default DateReducer