import * as actionsTypes from './actionsTypes';
import dayjs from 'dayjs';

export const changeWeek = (date, type) => {
    const currentWeek = date.isoWeek();

    let payload;

    if (type === actionsTypes.PREV_WEEK) {
        if (currentWeek === 1) {
            const prevYear = date.year() - 1;
            const numberOfWeeks = dayjs(date).year(prevYear).isoWeeksInYear();
            payload = dayjs(date).year(prevYear).isoWeek(numberOfWeeks);
        } else {
            const prevWeek = currentWeek - 1;
            payload = dayjs(date).isoWeek(prevWeek)
        }
    } else if (type === actionsTypes.NEXT_WEEK) {
        if (currentWeek === dayjs(date).isoWeeksInYear()) {
            const nextYear = date.year() + 1; 
            payload = dayjs(date).year(nextYear).isoWeek(1)
        } else {
            const nextWeek = currentWeek + 1
            payload = dayjs(date).isoWeek(nextWeek)
        }
    }

    return {
        type: type,
        payload: payload
    }
}

export const changeDay = (date, type) => {
    const currentDay = date.date();

    let payload;

    if (type === actionsTypes.PREV_DAY) {
        if (currentDay === 1) {
            const prevMonth = date.month() - 1;
            const prevMonthLength = dayjs(date).month(prevMonth).daysInMonth()
            payload = dayjs(date).month(prevMonth).date(prevMonthLength);
        } else {
            const prevDay = currentDay - 1;
            payload = dayjs(date).date(prevDay)
        }
    } else if (type === actionsTypes.NEXT_DAY) {
        const monthLength = date.daysInMonth();
        if (currentDay === monthLength) {
            const nextMonth = date.month() + 1;
            payload = dayjs(date).month(nextMonth).date(1)
        } else {
            const nextDay = currentDay + 1;
            payload = dayjs(date).date(nextDay)
        }
    }

    return {
        type: type,
        payload: payload
    }
}

export const currentDate = () => {
    return {
        type: actionsTypes.CURRENT_DATE,
        payload: dayjs()
    }
}

