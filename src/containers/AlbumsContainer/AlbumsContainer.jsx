import React, {Component} from 'react';
import {requestAlbums} from "../../actions";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import Link from "react-router-dom/es/Link";

class AlbumsContainer extends Component {

    static propTypes = {
        albums: PropTypes.array.isRequired,
        requestAlbums: PropTypes.func.isRequired,
        requestAlbumsSuccess: PropTypes.func,
    };

    componentDidMount() {
        this.props.requestAlbums();
    }

    getContent() {
        if (this.props.isLoadingAlbums === false) {
            return this.props.albums.map(album => (
                <div className="album" key={album.id}>
                    <Link to={`/albums/${album.id}`}>Owner id: {album.userId}<br/>Album id: {album.id}<br/> {album.title}</Link>
                </div>
            ))
        }

        if (this.props.isLoadingAlbums === 'error') {
            return <div><h3>При загрузке данных произошла ошибка!</h3>
                <button onClick={() => this.props.requestAlbums()}>Загрузить еще раз</button>
            </div>
        }

        if (this.props.isLoadingAlbums === 'loading' || true) {
            return <div><h3>Loading...</h3>
                <button onClick={() => this.props.requestAlbums()}>Загрузить еще раз</button>
            </div>
        }
    }

    render() {
        return (
            <div className="Albums">
                <h2 className="albumsHeader">Albums List</h2>
                <Link to='/albums/new'>Создать новый альбом</Link>
                <div>
                    {this.getContent()}
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
