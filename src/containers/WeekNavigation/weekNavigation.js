import React from 'react';
import NavigationByWeek from '../../components/NavigationByWeek/navigationByWeek';
import NavigationByDay from '../../components/NavigationByDay/navigationByDay';

const weekNavigation = () => {
    return (
        <nav>
            <NavigationByDay/>
            <NavigationByWeek/>
        </nav>
    )
}

export default weekNavigation