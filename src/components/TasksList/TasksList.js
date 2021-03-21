import React from 'react';
import dayjs from 'dayjs';
import {connect} from 'react-redux';
import WeekTasks from './WeekTasks';
import EmptyList from './EmptyList';
import Spinner from '../UI/Spinner';
import * as action from '../../store/actions/tasksActions';

class TasksList extends React.Component {

    constructor(props) {
        super(props);
        this.timer = null;
        this.changeStatus = this.changeStatus.bind(this)
    }

    componentDidMount() {
        this.props.getTasks(this.props.date.isoWeek())
    }

    componentDidUpdate(prevProps) {
        if (this.props.date.isoWeek() !== prevProps.date.isoWeek()) {
            this.props.getTasks(this.props.date.isoWeek())
        }
    }

    weekTimestamps () {
        const week = [];
        
        for (let i=0; i<7; i++) {
            const dayTimestamp = dayjs(this.props.date.format('YYYY-MM-DD')).isoWeekday(i).unix();
            week.push(dayTimestamp)
        }
        return week
    }

    changeStatus (e) {
        const day = e.target.id;
        const task = e.target.parentElement.parentElement.id;
        const currentStatus = this.props.tasks[task].status[day];
        this.props.changeTaskStatus(day, task, currentStatus);
        this.statusCheck(task);
    }

    statusCheck (id) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => this.props.updateStatus(id), 500)
    }

    render() {

        const listLength = Object.keys(this.props.tasks).length;
        let content = <Spinner/>;

        if (!this.props.loading && listLength>0) {
            content = (<WeekTasks currentDay={this.props.date.isoWeekday() - 1}
                weekTimestamps={this.weekTimestamps()}
                tasks={this.props.tasks}
                clicked={this.changeStatus}/>)
        } else if (!this.props.loading && listLength === 0) {
            content = <EmptyList /> 
        }


        return (
            <React.Fragment>
                {content}
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
        getTasks: (weekNumber) => dispatch(action.getTasks(weekNumber)),
        changeTaskStatus: (dayId, taskId, currentStatus) => dispatch(action.changeTaskStatus(dayId, taskId, currentStatus)),
        updateStatus: (id) => dispatch(action.updateStatusProcess(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksList)