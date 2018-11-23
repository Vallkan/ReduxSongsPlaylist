// import {applyMiddleware as dispatch} from "redux";

export const sagaMiddleware = (store) => next => action => {
    // if (action.type === 'REQUEST_USERS') {

    //     // return [...store.users, fetcher('https://jsonplaceholder.typicode.com/users')];
    //
    // } else {
        return next(action);
    // }
};
