import React from 'react';
import dayjs from 'dayjs';
import {connect} from 'react-redux';
import WeekTasks from './weekTasks';
import * as action from '../../store/actions/tasksActions';

class TasksList extends React.Component {

    componentDidMount() {
        this.props.getTasks(this.props.date.isoWeek())
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('update?', this.props.date.isoWeek() !== nextProps.date.isoWeek())
        return this.props.date.isoWeek() !== nextProps.date.isoWeek()
    }

    componentDidUpdate(prevProps) {
        console.log(this.props.date.isoWeek())

        if (prevProps.date !== this.props.date) {
            this.props.getTasks(this.props.date.isoWeek())
        }
    }

    weekTimestamps = () => {
        const week = [];
        
        for (let i=0; i<7; i++) {
            const dayTimestamp = dayjs(this.props.date).isoWeekday(i).unix();
            week.push(dayTimestamp)
        }
        return week
    }

    render() {
        return (
            <React.Fragment>
                <WeekTasks currentDay={this.props.date.isoWeekday() - 1}
                            weekTimestamps={this.weekTimestamps()}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        date: state.date.date,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTasks: (weekNumber) => dispatch(action.getTasks(weekNumber))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksList)