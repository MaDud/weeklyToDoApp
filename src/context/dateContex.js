import React, {useState, createContext} from 'react';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear';
import isLeapYear from 'dayjs/plugin/isLeapYear';

dayjs.extend(isoWeek);
dayjs.extend(isoWeeksInYear);
dayjs.extend(isLeapYear);

export const DateContex = createContext();

export const DateProvider = (props) => {
    const [date, setDate] = useState(dayjs());

    return (
    <DateContex.Provider value = {[date , setDate]}>
        {props.children}
    </DateContex.Provider>
    )
}