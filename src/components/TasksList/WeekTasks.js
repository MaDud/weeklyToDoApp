import React from 'react';
import TaskStatus from './TaskStatus';
import Button from '../UI/Button';
import '../../styles/TasksList/weekTasks.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import dayjs from 'dayjs';
import {status, weekday} from './enums';

class WeekTasks extends React.Component {

    constructor(props) {
        super(props);
        this.weekShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        this.state = {
            sortBy: 'tasks',
            asc: false
        };
    }

    setSortingOptions (id) {
        if (this.state.sortBy === id) {
            this.setState({asc: !this.state.asc})
        } else {
            this.setState({sortBy: id, asc: false})
        }
    }

    tableSortingBy(tasks, id) {
        const tasksValues = Object.values(tasks);

        if (id === 'tasks') {
            tasksValues.sort( (a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
        } else {
                tasksValues.sort( (a, b) => {
                    if ( a.status[id] === undefined || b.status[id] === undefined) {
                        return -1
                    } else {
                        return a.status[id]-b.status[id]
                    }
                })
        }

        if (this.state.asc) {
            tasksValues.reverse()
        }

        let sortedTasks = {};
        for (let task in tasksValues) {
            for (let taskId in this.props.tasks) {
                if (tasksValues[task].title === this.props.tasks[taskId].title) {
                    sortedTasks[taskId] = this.props.tasks[taskId]
                }
            }
        }

        return sortedTasks
    }

    currentSortIcon = () => {
        if (this.state.asc) {
            return <FontAwesomeIcon icon='sort-down' className='button__icon--active'/>
        } else {
            return<FontAwesomeIcon icon='sort-up' className='button__icon--active'/> 
        }
    }

    tableHeads(currentDay) {

        return this.weekShort.map( (day,index) => {
            return <th key={index} id={this.props.weekTimestamps[index]}
                        className={["tasksList__title",
                            index !== currentDay ? "tasksList__title--invisible" :null].join(' ')}>
                        <Button btnStyle='button--transparent button__sort' clicked={() => this.setSortingOptions(this.props.weekTimestamps[index])}>
                            {day} 
                            <span>
                                {this.state.sortBy === this.props.weekTimestamps[index] ? this.currentSortIcon() : <FontAwesomeIcon icon='sort' className='button__icon'/>}
                            </span>
                        </Button>
                    </th>
        })
    }

    tasksControl (weekTimestamps, currentDay, taskStatus) {

        return weekTimestamps.map( (day, index) => {
            let disabled = false;
            for (let prevDay in taskStatus) {
                const prevDayStatus = taskStatus[prevDay]
                const prevDayDate = dayjs.unix(prevDay);
                const dayDate = dayjs.unix(day);
                if (prevDay < day && (
                    (prevDayStatus === status.FINISHED || prevDayStatus === status.CANCELED) ||
                    (prevDayStatus === status.MOVED_TO_NEXT_WEEK && (
                        (prevDayDate.isoWeek() === dayDate.isoWeek() && dayDate.isoWeekday() !== weekday.MONDAY) || 
                        (prevDayDate.isoWeekday() === weekday.MONDAY && dayDate.isoWeek() === prevDayDate.isoWeek() + 1)))
                    )) {
                    disabled = true
                }
            }

            return <td 
                    key={day}
                    className={["tasksList__day",
                                index !== currentDay ? "tasksList__day--invisible" :null].join(' ')}>
                        <Button clicked={this.props.clicked} id={day} btnStyle={["button--transparent", "button__statusIcon", disabled ? "button__statusIcon--disabled" : null].join(' ')} disabled={disabled}>
                            <TaskStatus status={taskStatus[day] ? taskStatus[day] : 0} />
                        </Button>
                    </td>
        });
    }

    tableBody(tasks, weekTimestamps, currentDay) {

        const sortedTask = this.tableSortingBy(tasks, this.state.sortBy)

        return  Object.keys(sortedTask).map( task => {
            return <tr className="tasksList__row" key={task} id={task}>
                        {this.tasksControl(weekTimestamps,currentDay, tasks[task].status)}
                        <td className = "tasksList__task">{tasks[task].title}</td>
                    </tr>
        })
    }

    render() {
        const {tasks, currentDay, weekTimestamps} = this.props;
        return (    
            <table className="tasksList">
                <thead className="tasksList__head">
                    <tr className="tasksList__row">
                        {this.tableHeads(currentDay)}
                        <th className="tasksList__title" 
                            id="tasks">
                            <Button btnStyle='button--transparent button__sort' clicked={() => this.setSortingOptions('tasks')}>
                                Tasks 
                                <span>
                                    {this.state.sortBy === 'tasks'? this.currentSortIcon() : <FontAwesomeIcon icon='sort' className = 'button__icon'/>}
                                </span>
                            </Button>
                        </th>
                    </tr>
                </thead>
                <tbody className="tasksList__body">
                    {this.tableBody(tasks, weekTimestamps, currentDay)}
                </tbody>
            </table>
           
        )
    }

};

export default WeekTasks