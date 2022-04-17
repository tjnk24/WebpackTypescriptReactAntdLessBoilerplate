import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Status} from '__store/types';

import {CoreApiGetResponse} from '../api/types';
import {CorePageStoreState} from '../types';

const initialState: CorePageStoreState = {};

export const tableDataSlice = createSlice({
    name: 'tableData',
    initialState,
    reducers: {
        pending: state => ({
            ...state,
            status: Status.Pending,
        }),
        success: (state, {payload}: PayloadAction<CoreApiGetResponse[]>) => ({
            ...state,
            status: Status.Success,
            data: payload,
        }),
        failed: (state, {payload}: PayloadAction<string>) => ({
            ...state,
            status: Status.Failed,
            error: payload,
        }),
    },
});

export const actions = tableDataSlice.actions;
