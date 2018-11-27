import Link from "react-router-dom/es/Link";
import React, {Component} from "react";

export class GetAlbums extends Component {
    componentDidMount() {
        if (this.props.albums.length === 0) {
            this.props.requestAlbums();
        }
    }
    getContent() {
        if (this.props.isLoadingAlbums === false) {
            return this.props.albums.map(album => (
                <div className="album" key={album.id}>
                    <div>
                        <Link to={`/albums/${album.id}/edit`}><button className="edit-album">&#9998;</button></Link>
                    </div>
                    <Link to={`/albums/${album.id}`}>Owner id: {album.userId}<br/>Album
                        id: {album.id}<br/> {album.title}</Link>
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
            <div>
                {this.getContent()}
            </div>
        )
    }
}
