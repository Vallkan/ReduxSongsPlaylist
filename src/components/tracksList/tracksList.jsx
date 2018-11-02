import React, {Component} from 'react';

export class TracksList extends Component {

    returnSong(songId) {
        this.props.changeSong(songId);
    }

    renderSongList() {
        return (
            <ol className="rounded">
                {this.props.songs.map(song => (
                    <li key={song.id} className={(this.props.activeSong.id === song.id) ? 'active' : null}
                        onClick={() => this.returnSong(song.id)}><p>{song.name} - {song.duration}</p></li>
                ))}
            </ol>
        );
    }

    render() {
        return(
            <div className="tracksList">
                <h3>Tracks list</h3>
                {this.renderSongList()}
            </div>
        )
    }
}