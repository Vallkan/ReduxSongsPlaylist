import React, {Component} from 'react';
import {requestAlbums} from "../../actions";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import Link from "react-router-dom/es/Link";
import {GetAlbums} from "../../components/getAlbums/getAlbums";

class AlbumsContainer extends Component {

    static propTypes = {
        albums: PropTypes.array.isRequired,
        requestAlbums: PropTypes.func.isRequired,
        requestAlbumsSuccess: PropTypes.func,
        isLoadingAlbums: PropTypes.bool.isRequired,
    };

    render() {
        return (
            <div className="Albums">
                <h2 className="albumsHeader">Albums List</h2>
                <Link to='/albums/new'>Создать новый альбом</Link>
                <div>
                    <GetAlbums albums={this.props.albums} isLoadingAlbums={this.props.isLoadingAlbums} requestAlbums={this.props.requestAlbums}/>
                </div>
            </div>
        );
    }
}

export default connect(
    (store) => ({
        albums: store.albumsTab.albums,
        isLoadingAlbums: store.albumsTab.isLoadingAlbums,
    }),
    (dispatch) => ({
        requestAlbums: (status) => dispatch(requestAlbums(status)),
    })
)(AlbumsContainer)
