let albums = [];
let initialState = albums;

export default function albumsReducer(state = initialState, action) {
    switch (action.type) {
        case 'REQUEST_ALBUMS_SUCCESS':
            return action.payload.data;
        default:
            return state;
    }
}
