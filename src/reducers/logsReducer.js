
const initialState = [];

export default function songReducer(state=initialState, action) {
    switch(action.type) {
        case 'CHANGE_SONG':
            return [...state, 'Выбрана песня с ID ' + action.payload.songId];
        case 'CHANGE_STATUS':
            return [...state, action.payload.status];
        case 'TOGGLE_LIKE':
            if (action.payload.liked) {
                return [...state, `Песня с ID ${action.payload.id} добавлена в избраное`] ;
            }
            return [...state, `Песня с ID ${action.payload.id} удалена из избранных`] ;
        default:
            return state;
    }
}
