import React from 'react';

class TaskStatus extends React.Component {

    constructor(props) {
        super(props);
        this.statusIcon = this.statusIcon.bind(this)
    }

    statusIcon (status) {
        switch (status) {
            case STATUS.NONE: 
                return '';
            case STATUS.PLANNED:
                return '';
            case STATUS.IN_PROGRESS:
                return '';
            case STATUS.DONE:
                return '';
            case STATUS.MOVED_TO_NEXT_DAY:
                return '';
            case STATUS.MOVED_TO_NEXT_WEEK:
                return '';
            case STATUS.CANCELED:
                return ''
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