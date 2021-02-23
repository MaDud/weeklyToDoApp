import React, {useContext} from 'react';
import dayjs from 'dayjs';
import {DateContex} from '../../context/dateContex';
import WeekNavigation from '../../components/WeekNavigation/weekNavigation';

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const TasksNavigation = () => {

    const [date, setDate] = useContext(DateContex)

    const changeView = e => {
        const id = e.target.id;

        if ( id === 'prevWeek' || id === 'nextWeek') {
            const currentWeek = date.isoWeek();
            const currentYear = date.year();

            if (currentWeek === 1 && id === 'prevWeek') {
                const numberOfWeeks = dayjs(date).year(currentYear - 1).isoWeeksInYear();
                setDate(dayjs(date).year(currentYear - 1).isoWeek(numberOfWeeks));
            } 
            else if (currentWeek === dayjs(date).isoWeeksInYear() && id === 'nextWeek') {
                setDate(dayjs(date).year(currentYear + 1).isoWeek(1));
            }
            else {
                id === 'prevWeek' ? setDate(dayjs(date).isoWeek(currentWeek - 1)) : setDate(dayjs(date).isoWeek(currentWeek + 1))
            }

        } else {
            const currentDay = date.date();
            const monthLength = date.daysInMonth();
            const currentMonth = date.month()

            if (currentDay === 1 && id === 'prevDay') {
                const prevMonthLength = dayjs(date).month(-1).daysInMonth()
                setDate(dayjs(date).month(currentMonth - 1).date(prevMonthLength));
            }
            else if (currentDay === monthLength && id === 'nextDay') {
                setDate(dayjs(date).month(currentMonth + 1).date(1));
            } 
            else {
                id === 'prevDay' ? setDate(dayjs(date).date(currentDay - 1)) : setDate(dayjs(date).date(currentDay + 1))
            }
        }
    }

    const dayOfWeek = () => {
        const dayNumber = date.isoWeekday();
        return WEEK_DAYS[dayNumber - 1]
    }

    const weekPeriod = () => {
        let weekStart = dayjs(date).startOf('isoWeek').format('DD.MM.YYYY');
        let weekEnd = dayjs(date).endOf('isoWeek').format('DD.MM.YYYY');

        return `${weekStart} - ${weekEnd}`
    }

    const weekNumber = () => {
            return `${dayjs(date).isoWeek()}`
    }

    return (
        <React.Fragment>
            <WeekNavigation 
                changeView = {(e) => changeView(e)}
                dayOfWeek = {dayOfWeek()}
                weekPeriod = {weekPeriod()}
                weekNumber = {weekNumber()}
            />
        </React.Fragment>
    )
}

export default TasksNavigation