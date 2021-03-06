import React from 'react';
import Button from '../UI/Button';
import '../../styles/AddTask/addTaskForm.scss';

class AddTaskForm extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {inputChange, clicked, title, description} = this.props;
        return (
            <form className='addTaskForm'>
                <label htmlFor='title' className='addTaskForm__label'>Task</label>
                <input type='text' id='title' onChange={inputChange} className='addTaskForm__text' value={title}/>
                <label htmlFor='description' className='addTaskForm__label'>Task description</label>
                <textarea id='description' onChange={inputChange} className='addTaskForm__textarea' value={description}/>
                <Button type='submit' clicked={clicked} btnStyle='button--dark' {...this.props}>
                    Add task
                </Button>
            </form>
        )   
    }
};

export default AddTaskForm