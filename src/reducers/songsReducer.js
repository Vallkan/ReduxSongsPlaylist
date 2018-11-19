function getRandom() {
    return Math.round(Math.random() * 1000);
}

export const initialState = [
    {
        id: getRandom(),
        name: 'Paint it Black',
        duration: 214,
        liked: true
    },
    {
        id: getRandom(),
        name: 'Smells like teen spirit',
        duration: 174,
        liked: false
    },
    {
        id: getRandom(),
        name: 'Sonne',
        duration: 102,
        liked: false
    },
    {
        id: getRandom(),
        name: 'Rolling in the deep',
        duration: 265,
        liked: false
    },
    {
        id: getRandom(),
        name: 'Symphony №7',
        duration: 484,
        liked: false
    },
];

export default function songsReducer(state = initialState, action) {
    switch (action.type) {
        case 'EDIT_SONG':
            return state.map((song) => (song.id === action.payload.id ? {...song, ...action.payload.data} : song));
        case 'ADD_SONG':
            return [...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    duration: action.payload.duration,
                    liked: false
                }
            ];
        default:
            return state;
    }
}
