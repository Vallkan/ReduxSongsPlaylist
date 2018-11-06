import React, {Component} from 'react';
import {connect} from 'react-redux'
import {changeStatus, changeSong, toggleLike} from "../../actions";
// import Image from '../../images/download.png';
import {CurrentSong} from "../../components/curentSong/currentSong";
import {ControlPanel} from "../../components/controlPanel/controlPanel";
import {TracksList} from "../../components/tracksList/tracksList";
import {ActionsList} from "../../components/actionsList/actionsList";

class PlayerContainer extends Component {

    render() {
        const {activeSong, songs, status, changeStatus, changeSong, toggleLike} = this.props;

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
                            onSelectItem={this.props.changeSong} changable={true} noItems={"No Tracks"}
                            title={"All list"}/>
                <div className="action-likes-row">
                    <TracksList songs={likedItems} toggleLike={toggleLike} deletable={true}
                                onSelectItem={this.props.toggleLike} activeSong={activeSong} noItems={"No Liked tracks"}
                                actions={<span className="close">X</span>} title={"Liked tracks"}/>
                    <ActionsList/>
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
    }),
    (dispatch) => ({
        changeStatus: status => dispatch(changeStatus(status)),
        changeSong: song => dispatch(changeSong(song)),
        toggleLike: (id, liked) => dispatch(toggleLike(id, liked))
    })
)(PlayerContainer)
