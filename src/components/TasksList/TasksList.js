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
        if (currentStatus === 5 || (day === 6 && currentStatus === 4) || (day === 6 && currentStatus === 2)) {
            this.props.cancelMoveTaskToNextWeek(task)
        }
        this.props.changeTaskStatus(day, task, currentStatus);
        this.statusCheck(task, currentStatus, day);
    }

    statusCheck (taskId, status, day) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            const dayOfWeek = dayjs.unix(day).isoWeekday();
            if (status === 2 || status === 5 || status === 4) {
                for (let dayId in this.props.tasks[taskId].status) {
                    if (dayId > day) {
                        this.props.changeTaskStatus(dayId, taskId, 6)
                    }
                }
            }
            if (status === 4 || (dayOfWeek === 6 && status === 3) || (dayOfWeek === 6 && status === 1)) {
                this.props.moveTaskToNextWeek(taskId)
            };
            this.props.updateStatus(taskId); 
        }, 600)
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
        updateStatus: (id) => dispatch(action.updateStatusProcess(id)),
        moveTaskToNextWeek: (id) => dispatch(action.moveTaskToNextWeek(id)),
        cancelMoveTaskToNextWeek: (id) => dispatch(action.cancelMoveTaskToNextWeek(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksList)