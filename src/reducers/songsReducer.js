function getRandom() {
    return Math.round(Math.random() * 1000);
}

export const initialState = [
    {
        id: getRandom(),
        name: 'Paint it Black',
        duration: '3:34',
        liked: true
    },
    {
        id: getRandom(),
        name: 'Smells like teen spirit',
        duration: '2:54',
        liked: false
    },
    {
        id: getRandom(),
        name: 'Sonne',
        duration: '1:42',
        liked: false
    },
    {
        id: getRandom(),
        name: 'Rolling in the deep',
        duration: '4:25',
        liked: false
    },
    {
        id: getRandom(),
        name: 'Symphony №7',
        duration: '8:04',
        liked: false
    },
];

export default function songsReducer(state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_LIKE':
            return state.map((song) => (song.id === action.payload.id ? {...song, liked: !song.liked} : song));
        case 'CHANGE_NAME':
            return state.map((song) => (song.id === action.payload.id ? {...song, name: !action.payload.name} : song));
        default:
            return state;
    }
}
