import React from 'react';
import '../../styles/UI/button.scss';

class Button extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <button className={['button',this.props.btnStyle].join(' ')} 
                    onClick={this.props.clicked} 
                    id={this.props.id}
                    type={this.props.type}>
                {this.props.children}
            </button>
        )
    }
}

export default Button