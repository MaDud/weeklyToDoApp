import React from 'react';
import dayjs from 'dayjs';
import {connect} from 'react-redux';
import WeekTasks from './weekTasks';


const TasksList = props => {

    const weekTimestamps = () => {
        const week = [];
        
        for (let i=0; i<7; i++) {
            const dayTimestamp = dayjs(props.date).isoWeekday(i).unix();
            week.push(dayTimestamp)
        }
        return week
    }


    return (
        <React.Fragment>
            <WeekTasks currentDay={props.date.isoWeekday() - 1}
                        weekTimestamps={weekTimestamps()}/>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        date: state.date.date,
    }
}

export default connect(mapStateToProps)(TasksList)