import React, {Component} from 'react';
import {formatSeconds} from "../../utils/formatSeconds";
import PropTypes from 'prop-types';

export class CurrentSong extends Component {
    static propTypes = {
        activeSong: PropTypes.object.isRequired,
        status: PropTypes.string.isRequired,
    };

    render() {
        return(
            <div>
                {this.props.activeSong.name} {formatSeconds(this.props.activeSong.duration)} - {this.props.status}<br/>
            </div>
        )
    }
}
