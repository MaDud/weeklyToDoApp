import React from 'react';
import '../../styles/TasksNavigation/weekNavigation.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import NavigationData from './NavigationData';
import Button from '../UI/Button';

class WeekNavigation extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        const {weekNumber, dayOfWeek, weekPeriod} = this.props;

        return (
            <nav className={'weekNav'}>
                <Button clicked={this.props.changeView} 
                        id='prevWeek' 
                        btnStyle='button--transparent'
                        description='Previous week'>
                    <FontAwesomeIcon 
                        icon='angle-double-left'
                        className='weekNav__arrow' />
                </Button>
                <Button clicked={this.props.changeView} 
                        id='prevDay'
                        btnStyle='button--transparent button--invisibleOnDesktop'
                        description='Previous day'>
                    <FontAwesomeIcon 
                        icon='angle-left' 
                        className='weekNav__arrow' />
                </Button>
                <NavigationData 
                    weekNumber = {weekNumber}
                    dayOfWeek = {dayOfWeek}
                    weekPeriod = {weekPeriod}/>
                <Button clicked={this.props.changeView} 
                        id='nextDay'
                        btnStyle='button--transparent button--invisibleOnDesktop'
                        description='Next day'>
                    <FontAwesomeIcon 
                        icon='angle-right' 
                        className='weekNav__arrow' />
                </Button>
                <Button clicked={this.props.changeView} 
                        id='nextWeek'
                        btnStyle='button--transparent'
                        description='Next week'>
                    <FontAwesomeIcon 
                        icon='angle-double-right' 
                        className='weekNav__arrow' />
                </Button>
            </nav>
        )
    }
}

export default WeekNavigation