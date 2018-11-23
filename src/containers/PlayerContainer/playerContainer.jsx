import React, {Component} from 'react';
import {connect} from 'react-redux'
import {changeStatus, changeSong, editSong, addSong} from "../../actions";
import {CurrentSong} from "../../components/curentSong/currentSong";
import {ControlPanel} from "../../components/controlPanel/controlPanel";
import {TracksList} from "../../components/tracksList/tracksList";
import {LogsList} from "../../components/logsList/logsList";
import {AddNewSong} from "../../components/addNewSong/addNewSong";
import PropTypes from "prop-types";

class PlayerContainer extends Component {
    static propTypes = {
        activeSong: PropTypes.object.isRequired,
        songs: PropTypes.array.isRequired,
        logs: PropTypes.array.isRequired,
        changeStatus: PropTypes.func.isRequired,
        changeSong: PropTypes.func.isRequired,
        editSong: PropTypes.func.isRequired,
        addSong: PropTypes.func.isRequired,
        status: PropTypes.string.isRequired,
    };


    onEdit = (id) => {
        let name = window.prompt('New name?');

        this.props.editSong(id, {name});
    };

    onRemoveFromFavorites = (songId) => {
        if (window.confirm("Do you really want to remove this item from favorites?")) {
            this.props.editSong(songId, {liked: false});
        }
    };

    renderActionsEdit = (songId) => <button onClick={() => this.onEdit(songId)} className="action">&#9998;</button>;

    renderActionsUnFavorites = (songId) => <button onClick={() => this.onRemoveFromFavorites(songId)} className="action">X</button>;

    render() {
        const {activeSong, songs, status, changeStatus, changeSong, editSong, addSong, logs } = this.props;
        const likedItems = songs.filter(item => item.liked === true);

        return (
            <div className="Player-container">
                <h3>This song</h3>
                <CurrentSong activeSong={activeSong} status={status}/>
                <ControlPanel songs={songs} activeSong={activeSong}
                              toggleLike={(id, liked) => editSong(id, liked)} changeStatus={changeStatus}
                              changeSong={changeSong}/>
                <TracksList songs={songs} activeSong={activeSong} changeSong={changeSong}
                            onSelectItem={changeSong} renderActions={this.renderActionsEdit} noItems={"No Tracks"}
                            title={"All list"}/>
                <AddNewSong addSong={(id, name, duration) => addSong(id, name, duration)}/>
                <hr/>
                <div className="action-likes-row">
                    <TracksList songs={likedItems} toggleLike={editSong}
                                activeSong={activeSong} noItems={"No Liked tracks"}
                                renderActions={this.renderActionsUnFavorites} title={"Liked tracks"}/>
                    <LogsList logs={logs}/>
                </div>
            </div>
        );
    }
}

export default connect(
    (store) => ({
        status: store.playerTab.status,
        activeSong: store.playerTab.songs.find((song) => song.id === store.playerTab.song),
        songs: store.playerTab.songs,
        logs: store.playerTab.logs,
    }),
    (dispatch) => ({
        changeStatus: status => dispatch(changeStatus(status)),
        changeSong: song => dispatch(changeSong(song)),
        editSong: (id, data) => dispatch(editSong(id, data)),
        addSong: (id, name, duration) => dispatch(addSong(id, name, duration))
    })
)(PlayerContainer)
