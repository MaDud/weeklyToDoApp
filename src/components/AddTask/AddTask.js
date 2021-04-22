import React from 'react';
import Button from '../UI/Button';
import Modal from '../UI/modal';
import AddTaskForm from './AddTaskFrom';
import Spinner from '../UI/Spinner';
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
                description: '',
                status: {}
            },
        };
        this.changeAddFormVisibility = this.changeAddFormVisibility.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.addTaskProcess = this.addTaskProcess.bind(this)
    }

    componentDidUpdate (prevProps) {
        if (!this.props.error && prevProps.message !== this.props.message && prevProps.message === '' ) {
            this.changeAddFormVisibility();
            this.props.clearAddTask();
        }
    }

    changeAddFormVisibility () {
        this.setState({show: !this.state.show})

        if(this.state.show) {
            this.clearData()
        }

        if(this.props.error || this.props.loading) {
            this.props.clearAddTask();
        }
    }

    inputChange (e) {
        const newTask = this.state.newTask;
        const id = e.target.id;
        const value = e.target.value;

        newTask[id] = value;

        this.setState({newTask: newTask})       
    }

    clearData () {
        const task = {
            title: '',
            description: ''
        }
        this.setState({newTask:task})
    }

    addTaskProcess = e => {
        e.preventDefault();
        const data = {
            week: [this.props.date.isoWeek()],
            title: this.state.newTask.title.trim(),
            description: this.state.newTask.description.trim(),
            status: {...this.state.newTask.status}
        };
        this.props.addTask(data);
        this.clearData()
    }

    render() {
        let taskFrom = <AddTaskForm title={this.state.newTask.title} 
            description={this.state.newTask.description}
            inputChange={this.inputChange}
            clicked={this.addTaskProcess}
            disabled={this.state.newTask.title !== '' ? false : true}/>
        
        if (this.props.loading) {
            taskFrom = <Spinner />
        } else if (this.props.error) {
            taskFrom = <p>{this.props.message}</p>
        }
        
        return(
            <React.Fragment>
                <Modal show={this.state.show}
                        clicked={this.changeAddFormVisibility}>
                    <Button clicked={this.changeAddFormVisibility} btnStyle='button--transparent addTask__button'>x</Button>
                    <article className='addTask'>
                        {taskFrom}
                    </article>
                </Modal>
                <Button clicked={this.changeAddFormVisibility} btnStyle='button--dark addTask__openForm' id="fixed">
                    Add task
                </Button>
            </React.Fragment>
        ) 
    }
};

const mapStateToProps = state => {
    return {
        date: state.dateState.date,
        loading: state.tasksState.loading,
        error: state.tasksState.error,
        message: state.tasksState.message
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTask: date => dispatch(action.addTask(date)),
        clearAddTask: () => dispatch(action.clearAddTask())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask)