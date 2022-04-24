import {createSelector} from 'reselect';

import {CommonStore} from '__store/types';

export const routerSelector = createSelector(
    (state: CommonStore) => state.router,
    router => router,
);
