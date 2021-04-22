import React from 'react';
import '../../styles/UI/button.scss';

class Button extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <button className={['button',this.props.btnStyle, this.props.disabled ? 'button--disabled' : null].join(' ')} 
                    onClick={this.props.clicked} 
                    id={this.props.id}
                    type={this.props.type}
                    disabled={this.props.disabled}>
                {this.props.children}
                <span className='button__description'>{this.props.description}</span>
            </button>
        )
    }
}

export default Button