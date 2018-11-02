import React, {Component} from 'react';

export class LikedTracks extends Component {

    render() {
        let likedItems = this.props.songs.filter(item => {
            return item.liked === true;
        });

        return (
            <div className="likedTracks">
                <h3>Liked tracks</h3>
                <ol className="rounded">
                    {likedItems.length > 0 ? likedItems.map(song => (
                        <li key={song.id}><p>{song.name} - {song.duration}</p></li>
                    )) : <h3>No liked tracks</h3>}
                </ol>
            </div>
        )
    }
}
