import React from 'react';
import '../../styles/UI/button.scss';

const button = props => {
    return (
        <button className={['button',props.btnStyle].join(' ')} 
                onClick={props.clicked} 
                type={props.type}>
            {props.children}
        </button>
    )
}

export default button