import React from 'react';
import '../../styles/UI/button.scss';

const button = props => {
    return (
        <button className={['button',...props.btnStyle].join(' ')} 
                onClick={props.clicked} 
                type={props.type}>
            {props.text}
        </button>
    )
}

export default button