import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../../styles/TaskStatus/taskStatus.scss';
import {status} from './enums';

class TaskStatus extends React.Component {

    constructor(props) {
        super(props);
        this.statusIcon = this.statusIcon.bind(this)
    }

    statusIcon (value) {
        switch (value) {
            case status.NONE: 
                return <span className='icon'></span>;
            case status.PLANNED:
                return <FontAwesomeIcon icon="circle" className='icon'/>;
            case status.IN_PROGRESS:
                return <FontAwesomeIcon icon="ellipsis-h" className='icon'/>;
            case status.FINISHED:
                return <FontAwesomeIcon icon="star" className='icon'/>;
            case status.MOVED_TO_NEXT_DAY:
                return <FontAwesomeIcon icon="angle-right" className='icon'/>;
            case status.MOVED_TO_NEXT_WEEK:
                return <FontAwesomeIcon icon="angle-double-right" className='icon'/>;
            case status.CANCELED:
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