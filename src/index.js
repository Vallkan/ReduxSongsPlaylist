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

const rootReducer = combineReducers({
    status: statusReducer,
    song: songReducer,
    songs: songsReducer,
    logs: logsReducer,
});

const persistedState = loadState();
const store = createStore(rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(pingMiddleware)),
);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
