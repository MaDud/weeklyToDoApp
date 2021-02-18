import React from 'react';
import * as classes from './weekNavigation.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const weekNavigation = (props) => {
    return (
        <nav className={classes.weekNav}>
            <div onClick={props.changeWeek}>
                <FontAwesomeIcon icon='angle-double-left' />
            </div>
            <div onClick={props.changeWeek} className={classes.dayData}>
                <FontAwesomeIcon icon='angle-left' />
            </div>
            <hgroup>
                <h2>{props.weekNo}Week 10</h2>
                <h3 className={classes.dayData}>{props.weekDay}Friday</h3>
                <h3 className={classes.weekData}>{props.weekPeriod}16-17.02.2021</h3>
            </hgroup>
            <div onClick={props.changeWeek} className={classes.dayData}>
                <FontAwesomeIcon icon='angle-right' />
            </div>
            <div onClick={props.changeWeek}>
                <FontAwesomeIcon icon='angle-double-right' />
            </div>
        </nav>
    )
}

export default weekNavigation