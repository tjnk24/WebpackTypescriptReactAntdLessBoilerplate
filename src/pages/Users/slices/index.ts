import {tableDataSlice} from './tableDataSlice';

export const reducers = {
    [tableDataSlice.name]: tableDataSlice.reducer,
};

export const actions = {
    [tableDataSlice.name]: tableDataSlice.actions,
};
