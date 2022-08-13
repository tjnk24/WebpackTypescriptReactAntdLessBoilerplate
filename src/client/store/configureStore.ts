import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {routerMiddleware} from 'connected-react-router';
import {createLogger} from 'redux-logger';

import {history} from '__store/history';

import reducerRegistry from './reducerRegistry';

const rootReducer = combineReducers(reducerRegistry.reducers);

const logger = createLogger({collapsed: true});

export const store = configureStore({
    reducer: rootReducer,
    middleware: [
        routerMiddleware(history),
        logger,
    ],
});

reducerRegistry.setChangeListener(reducers => {
    store.replaceReducer(combineReducers(reducers));

    store.dispatch({type: '@@redux/RECOMBINE'});
});
