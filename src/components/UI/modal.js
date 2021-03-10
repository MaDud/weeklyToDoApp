import React from 'react';
import Backdrop from './backdrop';
import '../../styles/UI/modal.scss';

const modal = props => {
    return(
        <React.Fragment>
            <Backdrop show={props.show} />
            <article className='modal'>
                {props.children}
            </article>
        </React.Fragment>
    )
};

export default modal