import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import App from './App'
import statusReducer from './reducers/statusReducer';
import songReducer from './reducers/songReducer';
import songsReducer from './reducers/songsReducer';
import logsReducer from './reducers/logsReducer';
import { pingMiddleware } from './middlewares/pingMiddleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState } from './localstorage';
import {getUsersmiddleware} from "./middlewares/getUsersMiddleware";
import usersReducer from "./reducers/usersReducer";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    status: statusReducer,
    song: songReducer,
    songs: songsReducer,
    logs: logsReducer,
    users: usersReducer,
});

const persistedState = loadState();
const store = createStore(rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(thunk, pingMiddleware, getUsersmiddleware)),
);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
