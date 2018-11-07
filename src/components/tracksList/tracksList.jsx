import React, {Component} from 'react';

export class TracksList extends Component {

    render() {
        return(
            <div className="tracks-list">
                <h3>{this.props.title}</h3>
                {this.props.songs.length > 0 ?
                    <ol className="rounded">
                        {this.props.songs.map(song => (
                            <li key={song.id} onClick={() =>this.props.onSelectItem && this.props.onSelectItem(song.id)}
                                className={(this.props.activeSong.id === song.id) ? 'active song-item' : 'song-item'}>
                                {song.name} - {song.duration} {this.props.renderActions(song.id)}
                            </li>
                        ))}
                    </ol>
                    : <h3>{this.props.noItems}</h3>}
            </div>
        )
    }
}
