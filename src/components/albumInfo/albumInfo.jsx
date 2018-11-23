import React, {Component} from "react";
import {connect} from 'react-redux';
import {requestAlbum} from "../../actions";
import Link from "react-router-dom/es/Link";
import PropTypes from "prop-types";



export class AlbumInfo extends Component {

    static propTypes = {
        album: PropTypes.array.isRequired,
        requestAlbum: PropTypes.func.isRequired,
    };

    componentDidMount() {
        let albumId = parseInt(this.props.match.params.number, 10);
        this.props.requestAlbum(albumId);
        // console.log('this.props.requestAlbum', this.props.requestAlbum);
    }

    getAlbum() {
        let albumId = parseInt(this.props.match.params.number, 10);
        if (this.props.isLoadingAlbum === false) {
            return this.props.album.map(picture => (
                <img className="picture" alt={picture.title} key={picture.id} src={picture.url}/>
            ))
        }

        if (this.props.isLoadingAlbum === 'error') {
            return <div><h3>При загрузке данных произошла ошибка!</h3>
                <button onClick={this.props.requestAlbum(albumId)}>Загрузить еще раз</button>
            </div>
        }

        if (this.props.isLoadingAlbum === 'loading' || true) {
            return <div><h3>Loading...</h3>
                <button onClick={this.props.requestAlbum(albumId)}>Загрузить еще раз</button>
            </div>
        }
    }

    render() {
        return (
            <div>
                {this.getAlbum()}
                <Link to='/albums'>Back</Link>
            </div>
        )
    }
}

export default connect(
    (store) => ({
        album: store.albumsTab.album,
        isLoadingAlbum: store.albumsTab.isLoadingAlbum,
    }),
    (dispatch) => ({
        requestAlbum: (id) => dispatch(requestAlbum(id)),
    })
)(AlbumInfo);