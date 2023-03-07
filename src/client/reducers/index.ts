import {connectRouter} from 'connected-react-router';

import {history, RouterHistory} from '__store/history';

import {TestGlobalCounterSlice, testGlobalCounterSlice} from './testGlobalCounterSlice';

export type BaseStore = {
    router: RouterHistory;
    testGlobal: TestGlobalCounterSlice;
}

export const reducers = {
    router: connectRouter(history),
    testGlobal: testGlobalCounterSlice.reducer,
};
