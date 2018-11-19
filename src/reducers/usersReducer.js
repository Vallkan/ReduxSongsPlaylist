
let users = [];
let initialState = users;

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case 'REQUEST_USERS_SUCCESS':
            console.log(action);
                console.log(action.payload.data);
                return action.payload.data;
        default:
            return state;
    }
}