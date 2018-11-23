import {REQUEST_ALBUM_SUCCESS} from '../actions';
let initialState = true;

export default function albumLoaderReducer(state = initialState, action) {
    switch (action.type) {

        case REQUEST_ALBUM_SUCCESS:
            return action.payload.status;
        default:
            return state;
    }
}
