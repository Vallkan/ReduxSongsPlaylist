import React from 'react'
import {render} from 'react-dom'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import App from './App'
import statusReducer from './reducers/statusReducer';
import songReducer from './reducers/songReducer';
import songsReducer from './reducers/songsReducer';
import activeSongReducer from './reducers/activeSongReducer';
import logsReducer from './reducers/logsReducer';

const rootReducer = combineReducers({
    status: statusReducer,
    song: songReducer,
    songs: songsReducer,
    active: activeSongReducer,
    logs: logsReducer,
});

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
