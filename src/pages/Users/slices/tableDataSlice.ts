import {createStandardSlice} from '__utils/redux/createStandardSlice';

import {UsersApiGetResponse} from '../api/types';

export const tableDataSlice = createStandardSlice<UsersApiGetResponse[]>('usersTableData');
