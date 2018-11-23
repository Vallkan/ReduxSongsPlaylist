import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import App from './App'
import statusReducer from './reducers/statusReducer';
import songReducer from './reducers/songReducer';
import songsReducer from './reducers/songsReducer';
import logsReducer from './reducers/logsReducer';
import usersLoaderReducer from './reducers/usersLoaderReducer';
import { pingMiddleware } from './middlewares/pingMiddleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState } from './localstorage';
import {sagaMiddleware} from "./middlewares/sagaMiddleware";
import usersReducer from "./reducers/usersReducer";
import albumsReducer from "./reducers/albumsReducer";
import albumReducer from "./reducers/albumReducer";
import albumsLoaderReducer from './reducers/albumsLoaderReducer';
import albumLoaderReducer from './reducers/albumLoaderReducer';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

const playerTabReducer = combineReducers({
    status: statusReducer,
    song: songReducer,
    songs: songsReducer,
    logs: logsReducer,
});

const usersTabReducer = combineReducers({
    users: usersReducer,
    isLoadingUsers: usersLoaderReducer,
});

const albumsTabReducer = combineReducers({
    albums: albumsReducer,
    album: albumReducer,
    isLoadingAlbums: albumsLoaderReducer,
    isLoadingAlbum: albumLoaderReducer,
});

const rootReducer = combineReducers({
    playerTab: playerTabReducer,
    usersTab: usersTabReducer,
    albumsTab: albumsTabReducer,
    form: formReducer,
});

const persistedState = loadState();
const store = createStore(rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(thunk, pingMiddleware, sagaMiddleware)),
);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
