import React from 'react';
import Button from '../UI/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import * as action from '../../store/actions/dateActions';
import dayjs from 'dayjs';
import '../../styles/statusBar.scss';

class StatusBar extends React.Component {

    checkWeekStatus() {
        let statusIcon;
        if (this.props.date.format('YYYY-MM-DD') === dayjs().format('YYYY-MM-DD')) {
            statusIcon = null
        } else if (this.props.date.isoWeek() === dayjs().isoWeek()) {
            statusIcon =  ( <Button btnStyle='button--transparent button--invisibleOnDesktop' 
                                clicked={this.props.currentDate.bind(this)}
                                description='Back to current calendar day'>
                                <FontAwesomeIcon icon='adjust' className='status'/>
                            </Button>)
        } else {
            statusIcon = (  <Button btnStyle='button--transparent' 
                            clicked={this.props.currentDate.bind(this)}
                            description='Back to current calendar week'>
                                <FontAwesomeIcon icon='circle' className='status'/>
                            </Button>)
        }

        return statusIcon
    }

    render() {

        return (
            <React.Fragment>
                {this.checkWeekStatus()}
            </React.Fragment>
        )
    }
};

const mapStateToProps = state => {
    return {
        date: state.dateState.date
    }
}

const mapPropsToDispatch = dispatch => {
    return {
        currentDate:() => dispatch(action.currentDate())
    }
}

export default connect(mapStateToProps, mapPropsToDispatch)(StatusBar)