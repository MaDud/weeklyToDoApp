import React from 'react';
import dayjs from 'dayjs';
import {connect} from 'react-redux';
import * as action from '../../store/actions/dateActions';
import * as actionsTypes from '../../store/actions/actionsTypes';
import WeekNavigation from './WeekNavigation';

class TasksNavigation extends React.Component {

    constructor(props) {
        super(props);
        this.weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        this.changeView = this.changeView.bind(this)
    }

    changeView (e) {
        const buttonId = e.target.id;
        if ( buttonId === 'prevWeek') {
            this.props.changeWeek(this.props.date, actionsTypes.PREV_WEEK)
        } else if (buttonId === 'nextWeek') {
            this.props.changeWeek(this.props.date, actionsTypes.NEXT_WEEK)
        } else if (buttonId === 'prevDay') {
            this.props.changeDay(this.props.date, actionsTypes.PREV_DAY)
        } else {
            this.props.changeDay(this.props.date, actionsTypes.NEXT_DAY)
        }
    }

    dayOfWeek () {
        const dayNumber = this.props.date.isoWeekday();
        return this.weekDays[dayNumber - 1]
    }

    weekPeriod () {
        let weekStart = dayjs(this.props.date).startOf('isoWeek').format('DD.MM.YYYY');
        let weekEnd = dayjs(this.props.date).endOf('isoWeek').format('DD.MM.YYYY');

        return `${weekStart} - ${weekEnd}`
    }

    weekNumber () {
            return `${dayjs(this.props.date).isoWeek()}`
    }

    render() {

        return (
            <React.Fragment>
                <WeekNavigation 
                    changeView = {this.changeView}
                    dayOfWeek = {this.dayOfWeek()}
                    weekPeriod = {this.weekPeriod()}
                    weekNumber = {this.weekNumber()}
                />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        date: state.dateState.date
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeWeek: (date, type) => dispatch(action.changeWeek(date, type)),
        changeDay: (date, type) => dispatch(action.changeDay(date, type))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksNavigation)