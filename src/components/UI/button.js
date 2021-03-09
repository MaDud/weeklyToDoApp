import React from 'react';
import '../../styles/UI/button.scss';

const button = props => {
    return (
        <button className={['button',props.btnStyle].join(' ')}>
            {props.text}
        </button>
    )
}

export default button