import React, {Component} from 'react';

export class LogsList extends Component {

    render() {
        return (
            <div className="actions-list">
                <h3>Actions history</h3>
                <div className='logs-list'>
                    {this.props.logs.map(log => {
                        return <p>{log}</p>;
                    })}
                </div>
            </div>
        )
    }
}