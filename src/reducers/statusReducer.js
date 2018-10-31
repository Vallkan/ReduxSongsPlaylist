const initialState = 'Stop';

export default function statusReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_STATUS':
            return action.payload.status;
        default:
            return state;
    }
}

