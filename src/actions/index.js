export const CHANGE_STATUS = 'CHANGE_STATUS';
export const CHANGE_SONG = 'CHANGE_SONG';
export const EDIT_SONG = 'EDIT_SONG';
export const ADD_SONG = 'ADD_SONG';
export const REQUEST_USERS = 'REQUEST_USERS';
export const REQUEST_ALBUMS = 'REQUEST_ALBUMS';
export const REQUEST_ALBUM = 'REQUEST_ALBUM';
export const REQUEST_USERS_SUCCESS = 'REQUEST_USERS_SUCCESS';
export const REQUEST_ALBUMS_SUCCESS = 'REQUEST_ALBUMS_SUCCESS';
export const REQUEST_ALBUM_SUCCESS = 'REQUEST_ALBUM_SUCCESS';
export const REQUEST_ALBUMS_ERROR = 'REQUEST_ALBUMS_ERROR';
export const REQUEST_ALBUM_ERROR = 'REQUEST_ALBUM_ERROR';
export const REQUEST_USERS_ERROR = 'REQUEST_USERS_ERROR';
export const POST_NEW_ALBUM = 'POST_NEW_ALBUM';
export const NEW_ALBUM_SUCCESS = 'NEW_ALBUM_SUCCESS';
export const EDIT_ALBUM = 'EDIT_ALBUM';
export const EDIT_ALBUM_SUCCESS = 'EDIT_ALBUM_SUCCESS';

export const changeStatus = (status) => ({
    type: CHANGE_STATUS,
    payload: {
        status
    }
});

export const changeSong = (songId) => ({
    type: CHANGE_SONG,
    payload: {
        songId
    }
});

export const editSong = (id, data) => ({
    type: EDIT_SONG,
    payload: {
        id, data
    }
});

export const addSong = (id, name, duration) => ({
    type: ADD_SONG,
    payload: {
        id, name, duration
    }
});

export const requestUsers = () => dispatch => {
    dispatch({
        type: REQUEST_USERS,
    });

    const fetcher = (url) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                dispatch(requestUsersSuccess(data, false));
            })
            .catch(() => {
                dispatch(requestUsersError(true));
            })
    };
    //
    return fetcher('https://jsonplaceholder.typicode.com/users');
};

export const requestUsersSuccess = (data, status) => ({
    type: REQUEST_USERS_SUCCESS,
    payload: {
        data, status
    }
});

export const requestUsersError = (status) => ({
    type: REQUEST_USERS_ERROR,
    payload: {
        status
    }
});

export const requestAlbums = (status) => dispatch => {
    dispatch({
        type: REQUEST_ALBUMS,
        payload: {
            status
        }
    });

    const fetcher = (url) => {
        fetch(url)
            .then((resp) => {
                return resp.json()
            })
            .then((data) => {
                dispatch(requestAlbumsSuccess(data, false));
            })
            .catch(() => {
                dispatch(requestAlbumsError('error'));
            })
    };
    //
    return fetcher('https://jsonplaceholder.typicode.com/albums');
};

export const requestAlbumsSuccess = (data, status) => ({
    type: REQUEST_ALBUMS_SUCCESS,
    payload: {
        data, status
    }
});

export const requestAlbumsError = (status) => ({
    type: REQUEST_ALBUMS_ERROR,
    payload: {
        status
    }
});

export const requestAlbum = (id) => dispatch => {
    dispatch({
        type: REQUEST_ALBUM,
    });

    const fetcher = (url) => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                dispatch(requestAlbumSuccess(data, false));
            })
            .catch(() => {
                dispatch(requestAlbumError('error'));
            })
    };
    return fetcher('https://jsonplaceholder.typicode.com/albums/' + id + '/photos');
};

export const requestAlbumSuccess = (data, status) => ({
    type: REQUEST_ALBUM_SUCCESS,
    payload: {
        data, status
    }
});

export const requestAlbumError = (status) => ({
    type: REQUEST_ALBUM_ERROR,
    payload: {
        status
    }
});

export const postNewAlbum = (album) => dispatch => {
    dispatch({
        type: POST_NEW_ALBUM,
        payload: {
            album
        }
    });


    const fetcher = (url) => {
        fetch(url, {
            method: 'post',
            body: JSON.stringify({
                title: album.title,
                userId: album.ownerId,
            }),
        })
            .then((response) => response.json())
            .then(() => {
                dispatch(newAlbumSuccess({
                        title: album.title,
                        userId: parseInt(album.ownerId),
                        id: album.id
                    })
                );
            })
            .catch((error) => {
                alert(error);
            })
    };

    return fetcher('https://jsonplaceholder.typicode.com/albums');
};

export const newAlbumSuccess = (data) => ({
    type: NEW_ALBUM_SUCCESS,
    payload: {
        data
    }
});

export const editAlbum = (album) => dispatch => {
    dispatch({
        type: EDIT_ALBUM,
        payload: {
            album
        }
    });

    console.log(album);
    const fetcher = (url) => {
        console.log(url);
        fetch(url, {
            method: 'put',
            body: JSON.stringify({
                title: album.title.value,
                userId: album.ownerId.value,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(() => {
                dispatch(editAlbumSuccess({
                        id: album.id,
                        title: album.title,
                        userId: parseInt(album.ownerId),
                    })
                );
            })
            .catch((error) => {
                alert(error);
            })
    };

    return fetcher('https://jsonplaceholder.typicode.com/albums/' + album.id);
};

export const editAlbumSuccess = (data) => ({
    type: EDIT_ALBUM_SUCCESS,
    payload: {
        data
    }
});
