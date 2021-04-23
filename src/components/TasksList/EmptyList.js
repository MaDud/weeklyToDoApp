import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../../styles/TasksList/emptyList.scss';

class EmptyList extends React.Component {

    render() {
        return (
            <article className='emptyList' data-test='emptyList'>
                <h2 className='emptyList__title' data-test='emptyList__title'>There are no tasks!</h2>
                <p className='emptyList__text' data-test='emptyList__text'>Let's take a breath and relax</p>
                <FontAwesomeIcon icon='couch' className='emptyList__icon' data-test="emptyList__icon"/>
                <p className='emptyList__text' data-test='emptyList__text'>or</p>
            </article>
        )
    }
}

export default EmptyList