import {configureStore} from '@reduxjs/toolkit';
import reduxLogger from 'redux-logger';

import {tableDataSlice} from '__pages/Core/reduxSlices/tableDataSlice';

export const store = configureStore({
    reducer: tableDataSlice.reducer,
    middleware: [reduxLogger],
});
