import React from 'react';
import dayjs from 'dayjs';
import {connect} from 'react-redux';
import WeekTasks from './weekTasks';
import * as action from '../../store/actions/tasksActions';

class TasksList extends React.Component {

    componentDidMount() {
        console.log('Mount')
        this.props.getTasks()
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
        getTasks: () => dispatch(action.getTasks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksList)