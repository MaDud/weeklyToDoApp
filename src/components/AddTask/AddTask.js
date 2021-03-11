import React from 'react';
import Button from '../UI/button';
import Modal from '../UI/modal';
import AddTaskForm from './addTaskForm';

class AddTask extends React.Component {

    state= {
        show: false
    }

    changeAddFormVisibility = () => {
        this.setState({show: !this.state.show})
    }

    render() {
        console.log(this.state.show)
        return(
            <React.Fragment>
                <Modal show={this.state.show}
                        clicked={this.changeAddFormVisibility}>
                    <Button clicked={this.changeAddFormVisibility}>x</Button>
                    <AddTaskForm/>
                </Modal>
                <Button clicked={this.changeAddFormVisibility}>
                    Add task
                </Button>
            </React.Fragment>
        ) 
    }
};

export default AddTask