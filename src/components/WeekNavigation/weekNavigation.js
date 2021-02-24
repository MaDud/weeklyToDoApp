import React from 'react';
import '../../styles/weekNavigation/weekNavigation.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import NavigationData from './navigationData/navigationData';

const weekNavigation = (props) => {
    return (
        <nav className={'weekNav'}>
            <FontAwesomeIcon 
                icon='angle-double-left' 
                onClick={() => props.changeView('prevWeek')}
                className= 'weekNav__arrow'/>
            <FontAwesomeIcon 
                icon='angle-left' 
                className={['weekNav__arrow', 'weekNav__arrow--day'].join(' ')} 
                onClick={() => props.changeView('prevDay')}/>
            <NavigationData 
                weekNumber = {props.weekNumber}
                dayOfWeek = {props.dayOfWeek}
                weekPeriod = {props.weekPeriod}/>
            <FontAwesomeIcon 
                icon='angle-right' 
                className={['weekNav__arrow', 'weekNav__arrow--day'].join(' ')} 
                onClick={() => props.changeView('nextDay')}/>
            <FontAwesomeIcon 
                icon='angle-double-right' 
                onClick={() => props.changeView('nextWeek')}
                className= 'weekNav__arrow'/>
        </nav>
    )
}

export default weekNavigation