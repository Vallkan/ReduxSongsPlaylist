const initialState = ['Paint it Black', 'Smells like teen spirit', 'Sonne', 'Rolling in the deep', 'Symphony №7'];

export default function songsReducer(state=initialState, action) {
    console.log(state);
    return state;
}