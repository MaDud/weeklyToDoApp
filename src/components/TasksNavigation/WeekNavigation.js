import React from 'react';
import '../../styles/TasksNavigation/weekNavigation.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import NavigationData from './NavigationData';

class WeekNavigation extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        const {weekNumber, dayOfWeek, weekPeriod} = this.props;

        return (
            <nav className={'weekNav'}>
                <FontAwesomeIcon 
                    icon='angle-double-left' 
                    onClick={() => this.props.changeView('prevWeek')}
                    className= 'weekNav__arrow'/>
                <FontAwesomeIcon 
                    icon='angle-left' 
                    className={['weekNav__arrow', 'weekNav__arrow--day'].join(' ')} 
                    onClick={() => this.props.changeView('prevDay')}/>
                <NavigationData 
                    weekNumber = {weekNumber}
                    dayOfWeek = {dayOfWeek}
                    weekPeriod = {weekPeriod}/>
                <FontAwesomeIcon 
                    icon='angle-right' 
                    className={['weekNav__arrow', 'weekNav__arrow--day'].join(' ')} 
                    onClick={() => this.props.changeView('nextDay')}/>
                <FontAwesomeIcon 
                    icon='angle-double-right' 
                    onClick={() => this.props.changeView('nextWeek')}
                    className= 'weekNav__arrow'/>
            </nav>
        )
    }
}

export default WeekNavigation