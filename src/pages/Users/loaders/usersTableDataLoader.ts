import {store} from '__store/configureStore';
import {createLoader} from '__utils/redux/createLoader/createLoader';
import {UsersApiGetResponse} from '../api/types';

import {apiInstance} from '../api/usersApi';
import {tableDataSlice} from '../slices/tableDataSlice';

export const tableDataLoader = createLoader<UsersApiGetResponse[]>(tableDataSlice.actions, apiInstance.get)
