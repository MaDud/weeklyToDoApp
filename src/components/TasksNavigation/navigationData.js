import React from 'react';
import '../../styles/TasksNavigation/navigationData.scss';

const navigationData = (props) => {

    return (
        <hgroup className='weekInfo'>
            <h2 className='weekInfo__mainTitle'>
                Week {props.weekNumber}
            </h2>
            <h3 className={['weekInfo__subtitle', 'weekInfo__subtitle--day'].join(' ')}>
                {props.dayOfWeek}
            </h3>
            <h3 className={['weekInfo__subtitle', 'weekInfo__subtitle--week'].join(' ')}>
                {props.weekPeriod}
            </h3>
        </hgroup>
    )
};

export default navigationData