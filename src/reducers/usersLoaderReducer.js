import {REQUEST_USERS_SUCCESS} from "../actions";

let initialState = true;

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_USERS_SUCCESS:
            return action.payload.status;
        default:
            return state;
    }
}