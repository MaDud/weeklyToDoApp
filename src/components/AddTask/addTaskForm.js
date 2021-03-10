import React from 'react';
import Button from '../UI/button';

const addTaskForm = props => {
    return (
        <form className='addTaskForm'>
            <label for='task'>Task</label>
            <input type='text' id='task' onChange={props.inputChange}/>
            <label for='description'>Task description</label>
            <input type='textarea' id='description' onChange={props.inputChange}/>
            <Button type='submit' clicked={props.clicked}/>
        </form>
    )
};

export default addTaskForm