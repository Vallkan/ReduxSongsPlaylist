export const CHANGE_STATUS = 'CHANGE_STATUS';
export const CHANGE_SONG = 'CHANGE_SONG';
export const TOGGLE_LIKE = 'TOGGLE_LIKE';

export const changeStatus = (status) => ({
    type: CHANGE_STATUS,
    payload: {
        status
    }
});

export const changeSong = (song) => ({
    type: CHANGE_SONG,
    payload: {
        song
    }
});

export const toggleLike = (id, liked) => ({
    type: TOGGLE_LIKE,
    payload: {
        id, liked
    }
});