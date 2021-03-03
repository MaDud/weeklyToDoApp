import React from 'react';
import '../../styles/TasksList/weekTasks.scss';

const WEEK_SHORT = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const tasks = {
    1: {
        name: 'task1'        
    },
    2: {
        name: 'task2'        
    }
}

const weekTasks = props => {

    const tableHeads = WEEK_SHORT.map( (day,index) => {
        return <th key={index} 
                    className={["tasksList__title",
                        "tasksList__day",
                        index !== props.currentDay ? "tasksList__title--invisible" :null].join(' ')}>
                    {day}
                </th>
    });

    const tableBody = Object.keys(tasks).map( (task, index) => {
        return <tr className="tasksList__row" key={task}>
                    <td className= {["tasksList__day",
                                    index !== props.currentDay ? "tasksList__title--invisible" :null].join(' ')}>
                                    
                    </td>
                    <td className= {["tasksList__day",
                                    index !== props.currentDay ? "tasksList__title--invisible" :null].join(' ')}>
                                    
                    </td>
                    <td className= {["tasksList__day",
                                    index !== props.currentDay ? "tasksList__title--invisible" :null].join(' ')}>
                                    
                    </td>
                    <td className= {["tasksList__day",
                                    index !== props.currentDay ? "tasksList__title--invisible" :null].join(' ')}>
                                    
                    </td>
                    <td className= {["tasksList__day",
                                    index !== props.currentDay ? "tasksList__title--invisible" :null].join(' ')}>
                                    
                    </td>
                    <td className= {["tasksList__day",
                                    index !== props.currentDay ? "tasksList__title--invisible" :null].join(' ')}>
                                    
                    </td>
                    <td className= {["tasksList__day",
                                    index !== props.currentDay ? "tasksList__title--invisible" :null].join(' ')}>
                                    
                    </td>
                    <td className = "taskList__task">{tasks[task].name}</td>
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

export default weekTasks