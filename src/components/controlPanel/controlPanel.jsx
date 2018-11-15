import React, {Component} from 'react';
import PropTypes from "prop-types";

export class ControlPanel extends Component {

    static propTypes = {
        activeSong: PropTypes.object.isRequired,
        songs: PropTypes.array.isRequired,
        changeSong: PropTypes.func.isRequired,
        changeStatus: PropTypes.func.isRequired,
        toggleLike: PropTypes.func.isRequired,
    };

    nextIndex() {
        return this.props.songs.findIndex((song) => song.id === this.props.activeSong.id) + 1;
    }

    prevIndex() {
        return this.props.songs.findIndex((song) => song.id === this.props.activeSong.id) - 1;
    }

    onPrevSong = () => {
        const prevSongId = this.props.songs[this.prevIndex()].id;

        this.props.changeSong(prevSongId);
    };

    onNextSong = () => {
        const nextSongId = this.props.songs[this.nextIndex()].id;

        this.props.changeSong(nextSongId);
    };

    checkPrevDisabled() {
        return this.props.songs[this.prevIndex()] === undefined;
    };

    checkNextDisabled() {
        return this.props.songs[this.nextIndex()] === undefined;
    };

    toggleFavorite = () => {
        this.props.toggleLike(this.props.activeSong.id, {liked: !this.props.activeSong.liked});
    };

    onStop = () => {
        this.props.changeStatus('Stop')
    };

    onPause = () => {
        this.props.changeStatus('Pause')
    };

    onPlay = () => {
        this.props.changeStatus('Play')
    };

    render() {
        return (
            <div>
                <button className="prev-button" onClick={this.onPrevSong} disabled={this.checkPrevDisabled()}/>
                <button className="status-buttons" onClick={this.onPlay}>&#9658;</button>
                <button className="status-buttons" onClick={this.onPause}>&#10074;&#10074;</button>
                <button className="status-buttons" onClick={this.onStop}>&#9724;</button>
                <button className="next-button" onClick={this.onNextSong} disabled={this.checkNextDisabled()}/>
                {' '} - {' '}
                <button className={this.props.activeSong.liked ? 'red' : 'like-button'}
                        onClick={this.toggleFavorite}>&#10084;</button>
                <br/>
            </div>
        )
    }
}

