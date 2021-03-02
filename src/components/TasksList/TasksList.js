import React, {useContext} from 'react';
import WeekTasks from './weekTasks';
import {DateContex} from '../../context/dateContex';

const TasksList = () => {

    const [date, setDate] = useContext(DateContex);

    console.log(date.isoWeekday())

    return (
        <React.Fragment>
            <WeekTasks currentDay={date.isoWeekday() - 1}/>
        </React.Fragment>
    )
}

export default TasksList