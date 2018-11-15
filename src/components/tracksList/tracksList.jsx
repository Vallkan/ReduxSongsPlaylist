import React, {Component} from 'react';
import {formatSeconds} from "../../utils/formatSeconds";
import PropTypes from "prop-types";

export class TracksList extends Component {
    static propTypes = {
        activeSong: PropTypes.object.isRequired,
        title: PropTypes.string.isRequired,
        songs: PropTypes.array.isRequired,
        onSelectItem: PropTypes.func,
        renderActions: PropTypes.func.isRequired,
        noItems: PropTypes.string.isRequired,
    };

    render() {
        return(
            <div className="tracks-list">
                <h3>{this.props.title}</h3>
                {this.props.songs.length > 0 ?
                    <ol className="rounded">
                        {this.props.songs.map(song => (
                            <li key={song.id}
                                className={(this.props.activeSong.id === song.id) ? 'active song-item' : 'song-item'}>
                                <div onClick={() =>this.props.onSelectItem && this.props.onSelectItem(song.id)}>
                                {song.name} - {formatSeconds(song.duration)}</div> {this.props.renderActions(song.id)}
                            </li>
                        ))}
                    </ol>
                    : <h3>{this.props.noItems}</h3>}
            </div>
        )
    }
}
