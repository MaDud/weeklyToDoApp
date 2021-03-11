import React from 'react';
import dayjs from 'dayjs';
import {connect} from 'react-redux';
import * as action from '../../store/actions/dateActions';
import * as actionsTypes from '../../store/actions/actionsTypes';
import WeekNavigation from './weekNavigation';

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const TasksNavigation = (props) => {

    const changeView = id => {

        if ( id === 'prevWeek') {
            props.changeWeek(props.date, actionsTypes.PREV_WEEK)
        } else if (id === 'nextWeek') {
            props.changeWeek(props.date, actionsTypes.NEXT_WEEK)
        } else if (id === 'prevDay') {
            props.changeDay(props.date, actionsTypes.PREV_DAY)
        } else {
            props.changeDay(props.date, actionsTypes.NEXT_DAY)
        }
    }

    const dayOfWeek = () => {
        const dayNumber = props.date.isoWeekday();
        return WEEK_DAYS[dayNumber - 1]
    }

    const weekPeriod = () => {
        let weekStart = dayjs(props.date).startOf('isoWeek').format('DD.MM.YYYY');
        let weekEnd = dayjs(props.date).endOf('isoWeek').format('DD.MM.YYYY');

        return `${weekStart} - ${weekEnd}`
    }

    const weekNumber = () => {
            return `${dayjs(props.date).isoWeek()}`
    }

    return (
        <React.Fragment>
            <WeekNavigation 
                changeView = {changeView}
                dayOfWeek = {dayOfWeek()}
                weekPeriod = {weekPeriod()}
                weekNumber = {weekNumber()}
            />
        </React.Fragment>
    )

}

const mapStateToProps = state => {
    return {
        date: state.date
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeWeek: (date, type) => dispatch(action.changeWeek(date, type)),
        changeDay: (date, type) => dispatch(action.changeDay(date, type))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksNavigation)