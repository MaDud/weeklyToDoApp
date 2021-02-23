import React from 'react';
import * as classes from './weekNavigation.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const weekNavigation = (props) => {
    return (
        <nav className={classes.weekNav}>
            <FontAwesomeIcon icon='angle-double-left' onClick={props.changeView} id='prevWeek'/>
            <FontAwesomeIcon icon='angle-left' className={classes.dayData} onClick={props.changeView} id='prevDay'/>
            <hgroup>
                <h2>Week {props.weekNumber}</h2>
                <h3 className={classes.dayData}>{props.dayOfWeek}</h3>
                <h3 className={classes.weekData}>{props.weekPeriod}</h3>
            </hgroup>
            <FontAwesomeIcon icon='angle-right' className={classes.dayData} onClick={props.changeView} id='nextDay'/>
            <FontAwesomeIcon icon='angle-double-right' onClick={props.changeView} id='nextWeek'/>
        </nav>
    )
}

export default weekNavigation