import React, {Component} from 'react';
import {connect} from 'react-redux'
import {changeStatus, changeSong,} from "../../actions";
// import Image from '../../images/download.png';

class PlayerContainer extends Component {

    onPrevSong() {
        const prevSongIndex = this.props.songs.findIndex((song) => song.id === this.props.activeSong.id) - 1;
        const prevSongId = this.props.songs[prevSongIndex].id;

        this.props.changeSong(prevSongId);
    }

    onNextSong() {
        const nextSongIndex = this.props.songs.findIndex((song) => song.id === this.props.activeSong.id) + 1;
        const nextSongId = this.props.songs[nextSongIndex].id;

        this.props.changeSong(nextSongId);

    }

    returnSong(songId) {
        this.props.changeSong(songId);
    }

    renderSongList() {
        return (
            <ul>
                {this.props.songs.map(song => (
                    <li key={song.id} className={(this.props.activeSong.id === song.id) ? 'active' : null}
                        onClick={() => this.returnSong(song.id)}>{song.name} - {song.duration}</li>
                ))}
            </ul>
        );
    }

    // renderLikedList() {
    //     let likedCount = false;
    //     for (let i = 0; i < this.props.songs.length; i++) {
    //         if (this.props.songs[i].liked === true) {
    //             return likedCount = true;
    //         }
    //     }
    //
    //     return (
    //         likedCount ?
    //             <ul>
    //                 {this.props.songs.map(song => (
    //                     song.liked ? <li key={song.id}>{song.name} - {song.duration}</li> : null
    //                 ))}
    //             </ul> : <h4>No liked songs</h4>
    //     );
    // }

    // renderLikedList() {
    //     let likedCount = false;
    //     for (let i = 0; i < this.props.songs.length; i++) {
    //         if (this.props.songs[i].liked === true) {
    //             return likedCount = true;
    //         }
    //     }
    //     return (
    //         //filtered liked songs
    //         <ul>
    //             {this.props.songs.map(song => (
    //                 song.liked ?
    //                     <li key={song.id}>{song.name} - {song.duration}</li> : null
    //             ))}
    //         </ul>
    //     );
    // }

    renderLikedList() {
        return (
            <ul>
                {this.props.songs.map(song => (
                    song.liked ?
                        <li key={song.id}>{song.name} - {song.duration}</li> : null
                ))}
            </ul>
        );
    }

    checkPrevDisabled() {
        const prevSongIndex = this.props.songs.findIndex((song) => song.id === this.props.activeSong.id) - 1;

        return this.props.songs[prevSongIndex] === undefined;
    };

    checkNextDisabled() {
        //переменную в отдельную функцию
        const nextSongIndex = this.props.songs.findIndex((song) => song.id === this.props.activeSong.id) + 1;

        return this.props.songs[nextSongIndex] === undefined;
    };

    render() {

        //this props
        return (
            <div className="PlayerContainer">
                <h3>This song</h3>
                {this.props.activeSong.name}({this.props.activeSong.duration}) - {this.props.status}<br/>
                <button className="prevButton" onClick={() => this.onPrevSong()} disabled={this.checkPrevDisabled()} />
                <span onClick={() => this.props.changeStatus('Play')}>Play</span> | <span
                onClick={() => this.props.changeStatus('Pause')}>Pause</span> | <span
                onClick={() => this.props.changeStatus('Stop')}>Stop</span>
                <button className="nextButton"  onClick={() => this.onNextSong()} disabled={this.checkNextDisabled()} />
                {' '} - {' '}
                <button className="likeButton" />
                <br/>
                <h3>Tracks list</h3>
                {this.renderSongList()}
                <h3>Liked tracks</h3>
                {this.renderLikedList()}
            </div>
        );
    }
}

export default connect(
    (store) => ({
        status: store.status,
        activeSong: store.songs.find((song) => song.id === store.song),
        songs: store.songs,
    }),
    (dispatch) => ({
        changeStatus: status => dispatch(changeStatus(status)),
        changeSong: song => dispatch(changeSong(song)),
    })
)(PlayerContainer)
