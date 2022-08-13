import {createSelector} from 'reselect';

import {Status} from '__store/types';

import {UsersStoreState} from '../types';

export const tableDataSelector = createSelector(
    (state: UsersStoreState) => state?.usersTableData?.data,
    data => data || [],
);

export const tableDataIsPendingSelector = createSelector(
    (state: UsersStoreState) => state?.usersTableData?.status,
    status => status === Status.Pending,
);

