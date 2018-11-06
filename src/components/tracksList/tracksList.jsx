import React, {Component} from 'react';

export class TracksList extends Component {

    render() {
        return(
            <div className="tracksList">
                <h3>{this.props.title}</h3>
                {this.props.songs.length > 0 ?
                    <ol className="rounded">
                    {this.props.songs.map(song => (
                        <li key={song.id}
                            onClick={() => this.props.onSelectItem(song.id)}>
                            <button
                                className={(this.props.activeSong.id === song.id) ? 'active' : null}>{song.name} - {song.duration} {this.props.actions}</button>
                        </li>
                    ))}
                    </ol>
                : <h3>{this.props.noItems}</h3>}
            </div>
        )
    }
}
