const initialState = '1';

export default function activeSongReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_ACTIVE_SONG':
            return action.payload.status;
        default:
            return state;
    }
}
