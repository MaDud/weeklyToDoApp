import React from 'react';
import Button from '../UI/Button';
import Modal from '../UI/modal';
import AddTaskForm from './AddTaskFrom';
import '../../styles/AddTask/addTask.scss';

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
        this.inputChange = this.inputChange.bind(this)
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

    render() {
        console.log(this.state.newTask)
        return(
            <React.Fragment>
                <Modal show={this.state.show}
                        clicked={this.changeAddFormVisibility}>
                    <Button clicked={this.changeAddFormVisibility} btnStyle='button--transparent'>x</Button>
                    <AddTaskForm title={this.state.newTask.title} 
                            description={this.state.newTask.description}
                            inputChange={this.inputChange}/>
                </Modal>
                <Button clicked={this.changeAddFormVisibility} btnStyle='button--dark'>
                    Add task
                </Button>
            </React.Fragment>
        ) 
    }
};

export default AddTask