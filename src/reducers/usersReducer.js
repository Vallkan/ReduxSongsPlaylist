import {REQUEST_USERS_SUCCESS} from '../actions'

let users = [];
let initialState = users;

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_USERS_SUCCESS:
            return action.payload.data;
        default:
            return state;
    }
}