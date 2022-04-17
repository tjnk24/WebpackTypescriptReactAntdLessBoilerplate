import {configureStore} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';

import {tableDataSlice} from '__pages/Core/reduxSlices/tableDataSlice';

const logger = createLogger({collapsed: true});

export const store = configureStore({
    reducer: tableDataSlice.reducer,
    middleware: [logger],
});
