import React, {Component} from 'react';
import PropTypes from "prop-types";

export class LogsList extends Component {
    static propTypes = {
        logs: PropTypes.array
    };

    render() {
        return (
            <div className="actions-list">
                <h3>Actions history</h3>
                <div className='logs-list'>
                    {this.props.logs.map((log, index) => {
                        return <p key={index}>{log}</p>;
                    })}
                </div>
            </div>
        )
    }
}
