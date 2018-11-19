export const CHANGE_STATUS = 'CHANGE_STATUS';
export const CHANGE_SONG = 'CHANGE_SONG';
export const EDIT_SONG = 'EDIT_SONG';
export const ADD_SONG = 'ADD_SONG';
export const REQUEST_USERS = 'REQUEST_USERS';
export const REQUEST_USERS_SUCCESS = 'REQUEST_USERS_SUCCESS';

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

    console.log('S');

    dispatch({
        type: REQUEST_USERS,
    });

    const fetcher = (url) => {
        fetch(url)
            .then((resp) => {
                return resp.json()
            })
            .then((data) => {
                console.log('before dispatch in middleware');
                console.log(data);

                dispatch(requestUsersSuccess(data));
            })
            .catch(() => {

            })
    };
    //
    return fetcher('https://jsonplaceholder.typicode.com/users');
};

export const requestUsersSuccess = (data) => ({
    type: REQUEST_USERS_SUCCESS,
    payload: {
        data
    }
});
