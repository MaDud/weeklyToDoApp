import React, {Fragment} from 'react';

const navigationByDay = props => {
    return (
        <Fragment>
            <div onClick={props.changeWeek}>prevWeek</div>
            <div onClick={props.changeWeek}>prevDay</div>
            <hgroup>
                <h2>{props.weekNo}</h2>
                <h3>{props.weekDay}</h3>
            </hgroup>
            <div onClick={props.changeWeek}>nextDay</div>
            <div onClick={props.changeWeek}>nextWeek</div>
        </Fragment>
    )
};

export default navigationByDay