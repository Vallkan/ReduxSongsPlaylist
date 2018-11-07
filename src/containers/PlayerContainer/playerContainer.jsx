import React, {Component} from 'react';
import {connect} from 'react-redux'
import {changeStatus, changeSong, toggleLike, changeName} from "../../actions";
// import Image from '../../images/download.png';
import {CurrentSong} from "../../components/curentSong/currentSong";
import {ControlPanel} from "../../components/controlPanel/controlPanel";
import {TracksList} from "../../components/tracksList/tracksList";
import {LogsList} from "../../components/logsList/logsList";

class PlayerContainer extends Component {

    onEdit = () => {
        let result = window.prompt('New name?');
        this.props.changeName(result);
    }

    onRemoveFromFavorites = (songId) => {
        if (window.confirm("Do you really want to remove this item from favorites?")) {
            this.props.toggleLike(songId, false);
        }
    }

    render() {
        const {activeSong, songs, status, changeStatus, changeSong, toggleLike, } = this.props;

        let likedItems = this.props.songs.filter(item => {
            return item.liked === true;
        });

        return (
            <div className="PlayerContainer">
                <h3>This song</h3>
                <CurrentSong activeSong={activeSong} status={status}/>
                <ControlPanel songs={songs} activeSong={activeSong} toggleLike={toggleLike} changeStatus={changeStatus}
                              changeSong={changeSong}/>
                <TracksList songs={songs} activeSong={activeSong} changeSong={changeSong}
                            onSelectItem={changeSong} renderActions={(song) => <button onClick={() =>
                    this.onEdit(song.id)} className="close">&#9998;</button>} noItems={"No Tracks"}
                            title={"All list"}/>
                <hr/>
                <div className="action-likes-row">
                    <TracksList songs={likedItems} toggleLike={toggleLike}
                                activeSong={activeSong} noItems={"No Liked tracks"}
                                renderActions={(song) => <button onClick={() => this.onRemoveFromFavorites(song)}
                                                                 className="close">X</button>} title={"Liked tracks"}/>
                    <LogsList logs={this.props.logs}/>
                </div>
            </div>
        );
    }
}

export default connect(
    (store) => ({
        status: store.status,
        activeSong: store.songs.find((song) => song.id === store.song),
        songs: store.songs,
        logs: store.logs,
    }),
    (dispatch) => ({
        changeStatus: status => dispatch(changeStatus(status)),
        changeSong: song => dispatch(changeSong(song)),
        toggleLike: (id, liked) => dispatch(toggleLike(id, liked)),
        changeName: song => dispatch(changeName(song)),
    })
)(PlayerContainer)
