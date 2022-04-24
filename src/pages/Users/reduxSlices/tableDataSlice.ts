import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Status} from '__store/types';

import {UsersApiGetResponse} from '../api/types';

const initialState: UsersApiGetResponse[] = [];

export const usersTableDataSlice = createSlice({
    name: 'usersTableData',
    initialState,
    reducers: {
        pending: state => ({
            ...state,
            status: Status.Pending,
        }),
        success: (state, {payload}: PayloadAction<UsersApiGetResponse[]>) => ({
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

export const actions = usersTableDataSlice.actions;
