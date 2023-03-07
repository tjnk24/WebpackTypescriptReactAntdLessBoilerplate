import {createSelector} from 'reselect';

import {checkPending} from '__utils/redux/checkPending';

import {UsersStoreState} from '../types';

export const tableDataSelector = createSelector(
    (state: UsersStoreState) => state?.usersTableData?.data,
    data => data || [],
);

export const tableDataIsPendingSelector = createSelector(
    (state: UsersStoreState) => state?.usersTableData?.status,
    checkPending,
);
