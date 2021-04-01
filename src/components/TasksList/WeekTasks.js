import React from 'react';
import TaskStatus from './TaskStatus';
import Button from '../UI/Button';
import '../../styles/TasksList/weekTasks.scss';

class WeekTasks extends React.Component {

    constructor(props) {
        super(props);
        this.weekShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        this.state = {
            sortBy: 'tasks',
            asc: false
        };
    }

    tableSorting(id) {
        const tasksValues = Object.values(this.props.tasks);

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

        this.setState({tasksList: sortedTasks, asc: !this.state.asc, sortBy: id})
    }

    tableHeads(currentDay) {

        return this.weekShort.map( (day,index) => {
            return <th key={index} id={this.props.weekTimestamps[index]}
                        className={["tasksList__title",
                            "tasksList__day",
                            index !== currentDay ? "tasksList__title--invisible" :null].join(' ')}>
                        {day}
                        <Button onClick={() => this.tableSorting(this.props.weekTimestamps[index])}>c</Button>
                    </th>
        })
    }

    tasksControl (weekTimestamps, currentDay, status) {

        return weekTimestamps.map( (day, index) => {
            return <td 
                    key={day}
                    className={["tasksList__day",
                                index !== currentDay ? "tasksList__title--invisible" :null].join(' ')}>
                        <Button clicked={this.props.clicked} id={day} btnStyle="button--transparent">
                            <TaskStatus status={status[day] ? status[day] : 0} />
                        </Button>
                    </td>
        });
    }

    tableBody(tasks, weekTimestamps, currentDay) {

        return  Object.keys(tasks).map( task => {
            return <tr className="tasksList__row" key={task} id={task}>
                        {this.tasksControl(weekTimestamps,currentDay, tasks[task].status)}
                        <td className = "tasksList__task">{tasks[task].title}</td>
                    </tr>
        })
    }

    render() {
        const {tasks, currentDay, weekTimestamps} = this.props;
        console.log(this.state)
        return (    
            <table className="tasksList">
                <thead className="tasksList__head">
                    <tr className="tasksList__row">
                        {this.tableHeads(currentDay)}
                        <th className="tasksList__title" 
                            id="tasks"
                            onClick={() => this.tableSorting('tasks')}>
                            Tasks
                        </th>
                    </tr>
                </thead>
                <tbody className="tasksList__body">
                    {this.tableBody(this.props.tasks, weekTimestamps, currentDay)}
                </tbody>
            </table>
           
        )
    }

};

export default WeekTasks