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
                <h2 className='weekInfo__mainTitle'>
                    Week {weekNumber}
                </h2>
                <h3 className={['weekInfo__subtitle', 'weekInfo__subtitle--day'].join(' ')}>
                    {dayOfWeek}
                </h3>
                <h3 className={['weekInfo__subtitle', 'weekInfo__subtitle--week'].join(' ')}>
                    {weekPeriod}
                </h3>
            </hgroup>
        )
    }
};

export default NavigationData