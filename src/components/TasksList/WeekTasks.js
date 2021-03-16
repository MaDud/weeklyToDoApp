import React from 'react';
import TaskStatus from '../TaskStatus/TaskStatus';
import '../../styles/TasksList/weekTasks.scss';
import dayjs from 'dayjs'

class WeekTasks extends React.Component {

    constructor(props) {
        super(props);
        this.weekShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    }

    tableHeads(currentDay) {

        return this.weekShort.map( (day,index) => {
            return <th key={index} id={this.props.weekTimestamps[index]}
                        className={["tasksList__title",
                            "tasksList__day",
                            index !== currentDay ? "tasksList__title--invisible" :null].join(' ')}>
                        {day}
                    </th>
        })
    }

    tasksControl (weekTimestamps, currentDay, status) {

        return weekTimestamps.map( (day, index) => {
            return <td id={day}
                    key={day}
                    onClick={this.props.clicked}
                    className={["tasksList__day",
                                index !== currentDay ? "tasksList__title--invisible" :null].join(' ')}>
                        <TaskStatus status={status[day] ? status[day] : null} />
                    </td>
        });
    }

    tableBody(tasks, weekTimestamps, currentDay) {

        return  Object.keys(tasks).map( task => {
            return <tr className="tasksList__row" key={task}>
                        {this.tasksControl(weekTimestamps,currentDay, tasks[task].status)}
                        <td className = "taskList__task">{tasks[task].title}</td>
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
                        <th className="tasksList__title">Tasks</th>
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