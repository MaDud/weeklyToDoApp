import React from 'react';
import Backdrop from './backdrop';
import '../../styles/UI/modal.scss';

const modal = props => {
    return(
        <React.Fragment>
            <Backdrop {...props}/>
            <article className={['modal', !props.show? 'modal--invisible': null].join(' ')}>
                {props.children}
            </article>
        </React.Fragment>
    )
};

export default modal