import React from 'react';
import Button from '../UI/button';

class AddTask extends React.Component {

    render() {
        return(
            <section className='addTaskSection'>
                <Button text='Add task' />
            </section>
        ) 
    }
};

export default AddTask