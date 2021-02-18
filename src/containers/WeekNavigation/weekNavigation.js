import React, {useState} from 'react';
import * as classes from './weekNavigation.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import dayjs from 'dayjs';
import weekOfWeek from 'dayjs/plugin/weekOfYear';

dayjs.extend(weekOfWeek)

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const WeekNavigation = (props) => {

    const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'))

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
            <FontAwesomeIcon icon='angle-double-left' onClick={props.changeWeek}/>
            <FontAwesomeIcon icon='angle-left' className={classes.dayData} onClick={props.changeWeek}/>
            <hgroup>
                <h2>Week {weekNumber()}</h2>
                <h3 className={classes.dayData}>{dayOfWeek()}</h3>
                <h3 className={classes.weekData}>{weekPeriod()}</h3>
            </hgroup>
            <FontAwesomeIcon icon='angle-right' className={classes.dayData} onClick={props.changeWeek}/>
            <FontAwesomeIcon icon='angle-double-right' onClick={props.changeWeek}/>
        </nav>
    )
}

export default WeekNavigation