export const CHANGE_STATUS = 'CHANGE_STATUS';
export const CHANGE_SONG = 'CHANGE_SONG';

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
