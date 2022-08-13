import {createStandardSlice} from '__utils/redux/createStandardSlice';

import {UsersApiGetResponse} from '../api/types';
import {USERS_TABLE_DATA} from '../consts';

export const tableDataSlice = createStandardSlice<UsersApiGetResponse[]>(USERS_TABLE_DATA);
