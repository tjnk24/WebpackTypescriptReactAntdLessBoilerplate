import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {routerMiddleware} from 'connected-react-router';
import {createLogger} from 'redux-logger';

import {history} from '__store/history';

import reducerRegistry from './reducerRegistry';

const state = (window as any).__PRELOADED_STATE__;
delete (window as any).__PRELOADED_STATE__;

export const rootReducer = combineReducers(reducerRegistry.reducers);

const logger = createLogger({collapsed: true});

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: state,
    middleware: [
        routerMiddleware(history),
        logger,
    ],
});

reducerRegistry.setChangeListener(reducers => {
    store.replaceReducer(combineReducers(reducers));

    store.dispatch({type: '@@redux/RECOMBINE'});
});
