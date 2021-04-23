import React from 'react';
import '../../styles/UI/backdrop.scss';

class Backdrop extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            this.props.show ? (<div className='backdrop' onClick={this.props.clicked} data-test='backdrop'></div>) :null
        )
    }
}

export default Backdrop