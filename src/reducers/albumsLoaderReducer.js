import {REQUEST_ALBUMS_SUCCESS} from '../actions';
let initialState = true;

export default function albumsLoaderReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_ALBUMS_SUCCESS:
            return action.payload.status;
        default:
            return state;
    }
}
