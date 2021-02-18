import React from 'react';
import * as classes from './weekNavigation.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const weekNavigation = (props) => {
    return (
        <nav className={classes.weekNav}>
            <FontAwesomeIcon icon='angle-double-left' onClick={props.changeWeek}/>
            <FontAwesomeIcon icon='angle-left' className={classes.dayData} onClick={props.changeWeek}/>
            <hgroup>
                <h2>{props.weekNo}Week 10</h2>
                <h3 className={classes.dayData}>{props.weekDay}Friday</h3>
                <h3 className={classes.weekData}>{props.weekPeriod}16-17.02.2021</h3>
            </hgroup>
            <FontAwesomeIcon icon='angle-right' className={classes.dayData} onClick={props.changeWeek}/>
            <FontAwesomeIcon icon='angle-double-right' onClick={props.changeWeek}/>
        </nav>
    )
}

export default weekNavigation