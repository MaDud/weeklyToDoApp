import React from 'react';
import '../../styles/TasksList/weekTasks.scss';

const WEEK_SHORT = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

const weekTasks = props => {

    const tableHeads = WEEK_SHORT.map( (day,index) => {
        return <th key={index} 
                    className={["tasksList__title",
                        "tasksList__day",
                        index !== props.currentDay ? "tasksList__title--invisible" :null].join(' ')}>
                    {day}
                </th>
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

            </tbody>
        </table>
    )

};

export default weekTasks