import React from 'react';
import Button from '../UI/button';
import Modal from '../UI/modal';
import AddTaskForm from './addTaskForm';

class AddTask extends React.Component {

    render() {
        return(
            <React.Fragment>
                <Modal>
                    <AddTask/>
                </Modal>
                <Button text='Add task' btnStyle={['button--main']}/>
            </React.Fragment>
        ) 
    }
};

export default AddTask