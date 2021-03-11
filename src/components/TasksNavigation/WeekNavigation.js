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
                    id='prevWeek'
                    onClick={this.props.changeView}
                    className= 'weekNav__arrow'/>
                <FontAwesomeIcon 
                    icon='angle-left' 
                    id='prevDay'
                    className={['weekNav__arrow', 'weekNav__arrow--day'].join(' ')} 
                    onClick={this.props.changeView}/>
                <NavigationData 
                    weekNumber = {weekNumber}
                    dayOfWeek = {dayOfWeek}
                    weekPeriod = {weekPeriod}/>
                <FontAwesomeIcon 
                    icon='angle-right' 
                    id='nextDay'
                    className={['weekNav__arrow', 'weekNav__arrow--day'].join(' ')} 
                    onClick={this.props.changeView}/>
                <FontAwesomeIcon 
                    icon='angle-double-right' 
                    id='nextWeek'
                    onClick={this.props.changeView}
                    className= 'weekNav__arrow'/>
            </nav>
        )
    }
}

export default WeekNavigation