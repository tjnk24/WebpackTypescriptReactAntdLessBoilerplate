import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type TestGlobalCounterSlice = {
    count: number;
}

const initialState: TestGlobalCounterSlice = {
    count: 0,
};

export const testGlobalCounterSlice = createSlice({
    name: 'testGlobalCounter',
    initialState,
    reducers: {
        setCount: (_state, {payload}: PayloadAction<number>) => ({
            count: payload,
        }),
    },
});
