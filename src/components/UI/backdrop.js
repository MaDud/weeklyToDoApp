import React from 'react';
import '../../styles/UI/backdrop.scss';

const backdrop = props => {
    return (
        props.show ? (<div className='backdrop' onClick={props.clicked}></div>) :null
    )
}

export default backdrop