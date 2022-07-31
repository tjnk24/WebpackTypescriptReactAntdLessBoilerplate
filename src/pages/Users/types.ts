import {CommonStore, StoreState} from '__store/types';

import {UsersApiGetResponse} from './api/types';
import {USERS_TABLE_DATA} from './consts';

export type UsersStoreState = CommonStore & {
    [USERS_TABLE_DATA]: StoreState<UsersApiGetResponse[]>;
};
