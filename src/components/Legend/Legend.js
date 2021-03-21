import React from 'react';
import TaskStatus from '../TasksList/TaskStatus';
import Button from '../UI/Button';
import '../../styles/legend.scss';

class Legend extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.status = ['planned', 'in progress', 'done', 'moved to next day', 'moved to next week', 'canceled']
    }

    legendData () {
        const statusList = this.status.map( (status, index) => {
            return <tr key={index}>
                <td className='legend__symbol'><TaskStatus status={index + 1} /></td>
                <td className='legend__description'>{status}</td>
            </tr>
        });

        return statusList
    }

    legendVisibility () {
        this.setState({open: !this.state.open})
    }

    render() {
        const legendVisibility = ['legend'];
        if (this.state.open) {
            legendVisibility.push('legend__open')
        }
        return (
            <aside className={legendVisibility.join(' ')}>
                <Button btnStyle='button--dark'
                    clicked={this.legendVisibility.bind(this)}>
                        Legend
                </Button>
                <h2 className='legend__title' >Legend</h2>
                <table className='legend__table'>
                    <thead>
                        <tr>
                            <th className='legend__head'>Symbol</th>
                            <th className='legend__head'>Description</th>
                        </tr>
                    </thead>
                    <tbody className='legend__data'>
                        {this.legendData()}
                    </tbody>
                </table>
            </aside>
        )
    }
};

export default Legend