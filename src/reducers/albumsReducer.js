import {NEW_ALBUM_SUCCESS, REQUEST_ALBUMS_SUCCESS, EDIT_ALBUM_SUCCESS} from "../actions";

export default function albumsReducer(state = [], action) {
    switch (action.type) {
        case REQUEST_ALBUMS_SUCCESS:
            return action.payload.data;
        case NEW_ALBUM_SUCCESS:
            console.log(action.payload);
            return [...state, {
                    userId: action.payload.data.userId,
                    id: action.payload.data.id,
                    title: action.payload.data.title,
                }];
        case EDIT_ALBUM_SUCCESS:
            console.log(action.payload);
            return state.map(album =>
                album.id === parseInt(action.payload.data.id) ?
                    { ...album, title: action.payload.data.title, userId: action.payload.data.userId } :
                    album
            );
        default:
            return state;
    }
}
