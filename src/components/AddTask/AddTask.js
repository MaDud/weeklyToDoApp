import React from 'react';
import Button from '../UI/Button';
import Modal from '../UI/modal';
import AddTaskForm from './AddTaskFrom';
import '../../styles/AddTask/addTask.scss';
import {connect} from 'react-redux';
import * as action from '../../store/actions/tasksActions';

class AddTask extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            show: false,
            newTask: {
                title: '',
                description: ''
            }
        };
        this.changeAddFormVisibility = this.changeAddFormVisibility.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.addTaskProcess = this.addTaskProcess.bind(this)
    }

    changeAddFormVisibility () {
        this.setState({show: !this.state.show})
    }

    inputChange (e) {
        const newTask = this.state.newTask;
        const id = e.target.id;
        const value = e.target.value.trim();

        newTask[id] = value;

        this.setState({newTask: newTask})       
    }

    addTaskProcess = e => {
        e.preventDefault();
        const data = {
            week: this.props.date.isoWeek(),
            ...this.state.newTask
        };

        this.props.addTask(data)
    }

    render() {
        return(
            <React.Fragment>
                <Modal show={this.state.show}
                        clicked={this.changeAddFormVisibility}>
                    <Button clicked={this.changeAddFormVisibility} btnStyle='button--transparent'>x</Button>
                    <AddTaskForm title={this.state.newTask.title} 
                            description={this.state.newTask.description}
                            inputChange={this.inputChange}
                            clicked={this.addTaskProcess}/>
                </Modal>
                <Button clicked={this.changeAddFormVisibility} btnStyle='button--dark'>
                    Add task
                </Button>
            </React.Fragment>
        ) 
    }
};

const mapStateToProps = state => {
    return {
        date: state.date.date
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTask: date => dispatch(action.addTask(date))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask)