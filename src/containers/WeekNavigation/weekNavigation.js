import React, {useState} from 'react';
import * as classes from './weekNavigation.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import dayjs from 'dayjs';
import weekOfWeek from 'dayjs/plugin/weekOfYear';

dayjs.extend(weekOfWeek)

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const WeekNavigation = (props) => {

    const [date, setDate] = useState(dayjs())

    const dayOfWeek = () => {
        const dayNumber = dayjs(date).day()
        if (dayNumber === 1) {
            return WEEK_DAYS[6]
        } else {
            return WEEK_DAYS[dayNumber - 1]
        }
    }

    const weekPeriod = () => {
        const dayNumber = dayjs(date).day();
        const week = dayjs(date).week();
        if (dayNumber === 0) {
            return `${dayjs(date).week(week-1).day(1).format('DD')} - ${dayjs(date).format('DD.MM.YYYY')}`
        } else {
            return `${dayjs(date).day(1).format('DD')} - ${dayjs().week(week+1).day(0).format('DD.MM.YYYY')}`
        }
    }

    const changeView = e => {
        const id = e.target.id;

        if ( id === 'prevWeek' || id === 'nextWeek') {
            const currentWeek = dayjs(date).week();
            const currentYear = dayjs(date).year();

            if (currentWeek === 1 && id === 'prevWeek') {
                setDate(dayjs(date).year(currentYear-1).week(52));
                return
            } 
            if (currentWeek === 52 && id === 'nextWeek') {
                setDate(dayjs(date).year(currentYear+1).week(1));
                return
            }

            id === 'prevWeek' ? setDate(dayjs(date).week(currentWeek -1 )) : setDate(dayjs(date).week(currentWeek + 1))
        } else {
            const currentDay = dayjs(date).date();
            const monthLength = dayjs(date).daysInMonth();

            if (currentDay === 1 && id === 'prevDay') {
                const prevMonthLength = dayjs(date).month(-1).daysInMonth()
                setDate(dayjs(date).month(-1).date(prevMonthLength));
                return
            }
            if (currentDay === monthLength && id === 'nextDay') {
                setDate(dayjs(date).month(+1).date(1));
                return
            } 
            id === 'prevDay' ? setDate(dayjs(date).date(currentDay-1)) : setDate(dayjs(date).date(currentDay+1))
        }
    }

    const weekNumber = () => {
        const dayNumber = dayjs(date).day();
        const week = dayjs(date).week();
        if (dayNumber === 0) {
            return `${dayjs(date).week(week - 1).week()}`
        } else {
            return `${dayjs(date).week()}`
        }
    }

    return (
        <nav className={classes.weekNav}>
            <FontAwesomeIcon icon='angle-double-left' onClick={(e) => changeView(e)} id='prevWeek'/>
            <FontAwesomeIcon icon='angle-left' className={classes.dayData} onClick={(e) => changeView(e)} id='prevDay'/>
            <hgroup>
                <h2>Week {weekNumber()}</h2>
                <h3 className={classes.dayData}>{dayOfWeek()}</h3>
                <h3 className={classes.weekData}>{weekPeriod()}</h3>
            </hgroup>
            <FontAwesomeIcon icon='angle-right' className={classes.dayData} onClick={(e) => changeView(e)} id='nextDay'/>
            <FontAwesomeIcon icon='angle-double-right' onClick={(e) => changeView(e)} id='nextWeek'/>
        </nav>
    )
}

export default WeekNavigation