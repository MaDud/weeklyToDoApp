import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class TaskStatus extends React.Component {

    constructor(props) {
        super(props);
        this.statusIcon = this.statusIcon.bind(this)
    }

    statusIcon (status) {
        switch (status) {
            case 0: 
                return '';
            case 1:
                return <FontAwesomeIcon icon="circle" className='icon'/>;
            case 2:
                return <FontAwesomeIcon icon="ellipsis-h" className='icon'/>;
            case 3:
                return <FontAwesomeIcon icon="star" className='icon'/>;
            case 4:
                return <FontAwesomeIcon icon="angle-right" className='icon'/>;
            case 5:
                return <FontAwesomeIcon icon="angle-double-right" className='icon'/>;
            case 6:
                return <FontAwesomeIcon icon="times" className='icon'/>
            default:
                return ''
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.statusIcon(this.props.status)}
            </React.Fragment>
        )
    }
};

export default TaskStatus