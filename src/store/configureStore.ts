import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import {createLogger} from 'redux-logger';

import {usersTableDataSlice} from '__pages/Users/reduxSlices/tableDataSlice';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    usersTableData: usersTableDataSlice.reducer,
    router: connectRouter(history),
});

const logger = createLogger({collapsed: true});

export const store = configureStore({
    reducer: rootReducer,
    middleware: [
        routerMiddleware(history),
        logger,
    ],
});
