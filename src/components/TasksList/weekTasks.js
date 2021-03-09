import React from 'react';
import '../../styles/TasksList/weekTasks.scss';
import {connect} from 'react-redux';

const WEEK_SHORT = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const weekTasks = props => {

    const tableHeads = WEEK_SHORT.map( (day,index) => {
        return <th key={index} 
                    className={["tasksList__title",
                        "tasksList__day",
                        index !== props.currentDay ? "tasksList__title--invisible" :null].join(' ')}>
                    {day}
                </th>
    });

    const tasksControl = props.weekTimestamps.map( (day, index) => {
        return <td key={index}
                className={["tasksList__day",
                            index !== props.currentDay ? "tasksList__title--invisible" :null].join(' ')}>
                    <input type="checkbox" id={day} />
                </td>
    })

    const tableBody = Object.keys(props.tasks).map( task => {
        return <tr className="tasksList__row" key={task}>
                    {tasksControl}
                    <td className = "taskList__task">{props.tasks[task].title}</td>
                </tr>
    })

    return (    
        <table className="tasksList">
            <thead className="tasksList__head">
                <tr className="tasksList__row">
                    {tableHeads}
                    <th className="tasksList__title">Tasks</th>
                </tr>
            </thead>
            <tbody className="tasksList__body">
                {tableBody}
            </tbody>
        </table>
       
    )

};

const mapStateToProps = state => {
    return {
        tasks: state.tasks.tasks,
        loading: state.tasks.loading
    }
}

export default connect(mapStateToProps)(weekTasks)