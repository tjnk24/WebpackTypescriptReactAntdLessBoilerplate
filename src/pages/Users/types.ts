import {CommonStore, StoreState} from '__store/types';

import {UsersApiGetResponse} from './api/types';

export type UsersStoreState = CommonStore & {
    usersTableData: StoreState<UsersApiGetResponse[]>;
};
