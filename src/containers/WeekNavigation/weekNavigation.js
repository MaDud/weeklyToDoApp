import React from 'react';
import * as classes from './weekNavigation.module.scss';


const weekNavigation = (props) => {
    return (
        <nav className={classes.weekNav}>
            <div onClick={props.changeWeek} className={classes.weekData}>prevWeek</div>
            <div onClick={props.changeWeek} className={classes.dayData}>prevDay</div>
            <hgroup>
                <h2>{props.weekNo}</h2>
                <h3 className={classes.dayData}>{props.weekDay}</h3>
                <h3 className={classes.weekData}>{props.weekPeriod}</h3>
            </hgroup>
            <div onClick={props.changeWeek} className={classes.dayData}>nextDay</div>
            <div onClick={props.changeWeek} className={classes.weekData}>nextWeek</div>
        </nav>
    )
}

export default weekNavigation