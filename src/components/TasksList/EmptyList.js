import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../../styles/TasksList/emptyList.scss';

class EmptyList extends React.Component {

    render() {
        return (
            <article className='emptyList'>
                <h1 className='emptyList__title'>There is no task!</h1>
                <p className='emptyList__text'>Let's take a breath and relax</p>
                <FontAwesomeIcon icon='couch' className='emptyList__icon'/>
                <p className='emptyList__text'>or</p>
            </article>
        )
    }
}

export default EmptyList