import React, {Fragment} from 'react';

const navigationByWeek = props => {
    return (
        <Fragment>
            <div onClick={props.changeWeek}>prevWeek</div>
            <hgroup>
                <h2>{props.weekNo}</h2>
                <h3>{props.weekPeriod}</h3>
            </hgroup>
            <div onClick={props.changeWeek}>nextWeek</div>
        </Fragment>
    )
}

export default navigationByWeek