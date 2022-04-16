import {createSelector} from 'reselect';

import {Status} from '__store/types';

import {CorePageStoreState} from '../types';

export const tableDataSelector = createSelector(
    (state: CorePageStoreState) => state?.data,
    data => data || [],
);

export const tableDataIsPendingSelector = createSelector(
    (state: CorePageStoreState) => state?.status,
    status => status === Status.Pending,
);

