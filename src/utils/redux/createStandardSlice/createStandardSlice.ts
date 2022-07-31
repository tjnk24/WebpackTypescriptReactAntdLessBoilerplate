import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Status} from '__store/types';

import {InitialStateType} from './types';

export const createStandardSlice = <T>(sliceName: string) => {
    const initialState: InitialStateType<T> = {data: null};

    return createSlice({
        name: sliceName,
        initialState,
        reducers: {
            pending: state => ({
                ...state,
                status: Status.Pending,
            }),
            success: (_state, {payload}: PayloadAction<T>) => ({
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
};
