import {createLoader} from '__utils/redux/createLoader';

import {UsersApiGetResponse} from '../api/types';
import {apiInstance} from '../api/usersApi';
import {tableDataSlice} from '../slices/tableDataSlice';

export const tableDataLoader = createLoader<UsersApiGetResponse[]>(tableDataSlice.actions, apiInstance.get);
