import {REQUEST_ALBUM_SUCCESS} from '../actions';
let album = [];
let initialState = album;

export default function albumReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_ALBUM_SUCCESS:
            return action.payload.data;
        default:
            return state;
    }
}