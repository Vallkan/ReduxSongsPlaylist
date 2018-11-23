import { saveState } from '../localstorage';

export const pingMiddleware = (store) => next => action => {
    // console.log(action.type);
    // if (action.type === )
    let thisState = store.getState();
    delete thisState.playerTab.logs;
    // console.log(thisState);
    saveState(thisState);
    return next(action)
};
