import React from 'react';
import dayjs from 'dayjs';
import {connect} from 'react-redux';
import WeekTasks from './WeekTasks';
import Spinner from '../UI/Spinner';
import * as action from '../../store/actions/tasksActions';

class TasksList extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getTasks(this.props.date.isoWeek())
    }

    componentDidUpdate(prevProps) {
        if (this.props.date.isoWeek() !== prevProps.date.isoWeek()) {
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
                {this.props.loading? <Spinner /> :
                <WeekTasks currentDay={this.props.date.isoWeekday() - 1}
                            weekTimestamps={this.weekTimestamps()}
                            tasks={this.props.tasks}/>}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        date: state.date.date,
        loading: state.tasks.loading,
        tasks: state.tasks.tasks,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTasks: (weekNumber) => dispatch(action.getTasks(weekNumber))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksList)