import React, {Component} from 'react';

export class CurrentSong extends Component {
    render() {
        return(
            <div>
                {this.props.activeSong.name}({this.props.activeSong.duration}) - {this.props.status}<br/>
            </div>
        )
    }
}
