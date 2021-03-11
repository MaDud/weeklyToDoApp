import React from 'react';
import Button from '../UI/Button';

const addTaskForm = props => {
    return (
        <form className='addTaskForm'>
            <label htmlFor='task'>Task</label>
            <input type='text' id='task' onChange={props.inputChange}/>
            <label htmlFor='description'>Task description</label>
            <input type='textarea' id='description' onChange={props.inputChange}/>
            <datalist>
                
            </datalist>
            <Button type='submit' clicked={props.clicked} text='Add task'/>
        </form>
    )
};

export default addTaskForm