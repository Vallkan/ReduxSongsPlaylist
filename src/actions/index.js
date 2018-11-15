export const CHANGE_STATUS = 'CHANGE_STATUS';
export const CHANGE_SONG = 'CHANGE_SONG';
export const EDIT_SONG = 'EDIT_SONG';
export const ADD_SONG = 'ADD_SONG';

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