import {bindActions} from '__store/bindActions';

import {USERS_TABLE_DATA} from '../consts';
import {tableDataSlice} from './tableDataSlice';

export const reducers = {
    [USERS_TABLE_DATA]: tableDataSlice.reducer,
};

export const actions = bindActions({
    [USERS_TABLE_DATA]: tableDataSlice.actions,
});
