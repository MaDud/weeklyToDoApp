import React from 'react';
import '../../styles/logo.scss';

class Logo extends React.Component {
    render () {
        return (
            <h1 className='logo' data-test='logo'>WeeklyToDo</h1>
        )
    }
};

export default Logo