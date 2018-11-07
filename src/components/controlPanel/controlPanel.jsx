import React, {Component} from 'react';

export class ControlPanel extends Component {

    nextIndex() {
        return this.props.songs.findIndex((song) => song.id === this.props.activeSong.id) + 1;
    }

    prevIndex() {
        return this.props.songs.findIndex((song) => song.id === this.props.activeSong.id) - 1;
    }

    onPrevSong() {
        const prevSongId = this.props.songs[this.prevIndex()].id;

        this.props.changeSong(prevSongId);
    }

    onNextSong() {
        const nextSongId = this.props.songs[this.nextIndex()].id;

        this.props.changeSong(nextSongId);
    }

    checkPrevDisabled() {
        return this.props.songs[this.nextIndex()] === undefined;
    };

    checkNextDisabled() {
        return this.props.songs[this.nextIndex()] === undefined;
    };

    toggleFavorite() {
        console.log(this.props.activeSong);
        this.props.toggleLike(this.props.activeSong.id, !this.props.activeSong.liked);
    }

    render() {
        return (
            <div>
                <button className="prevButton" onClick={() => this.onPrevSong()} disabled={this.checkPrevDisabled()}/>
                <span onClick={() => this.props.changeStatus('Play')}>Play</span> | <span
                onClick={() => this.props.changeStatus('Pause')}>Pause</span> | <span
                onClick={() => this.props.changeStatus('Stop')}>Stop</span>
                <button className="nextButton" onClick={() => this.onNextSong()} disabled={this.checkNextDisabled()}/>
                {' '} - {' '}
                <button className={this.props.activeSong.liked ? 'red' : 'likeButton'}
                        onClick={() => this.toggleFavorite()}>&#10084;</button>
                <br/>
            </div>
        )
    }
}

