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
                <div className={['modal', !this.props.show? 'modal--invisible': null].join(' ')} data-test='modal'>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
};

export default Modal