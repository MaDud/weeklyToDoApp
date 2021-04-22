import React from 'react';
import '../../styles/TasksNavigation/navigationData.scss';

class NavigationData extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        const {weekNumber, dayOfWeek, weekPeriod} = this.props;

        return (
            <hgroup className='weekInfo'>
                <h1 className='weekInfo__mainTitle'>
                    Week {weekNumber}
                </h1>
                <h2 className={['weekInfo__subtitle', 'weekInfo__subtitle--day'].join(' ')}>
                    {dayOfWeek}
                </h2>
                <h2 className={['weekInfo__subtitle', 'weekInfo__subtitle--week'].join(' ')}>
                    {weekPeriod}
                </h2>
            </hgroup>
        )
    }
};

export default NavigationData