import { initialState} from "./songsReducer";

export default function songReducer(state=initialState[0].id, action) {
    switch(action.type) {
        case 'CHANGE_SONG':
            return action.payload.song;
        default:
            return state;
    }
}
