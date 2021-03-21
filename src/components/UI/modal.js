import React from 'react';
import Backdrop from './backdrop';
import '../../styles/UI/modal.scss';

class Modal extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <React.Fragment>
                <Backdrop {...this.props}/>
                <article className={['modal', !this.props.show? 'modal--invisible': null].join(' ')}>
                    {this.props.children}
                </article>
            </React.Fragment>
        )
    }
};

export default Modal