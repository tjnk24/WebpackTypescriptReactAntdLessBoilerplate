import {routerActions} from 'connected-react-router';

import {testGlobalCounterSlice} from '__reducers/testGlobalCounterSlice';
import {bindActions} from '__store/bindActions';

export const commonActions = bindActions({
    router: routerActions,
    testGlobalCounter: testGlobalCounterSlice.actions,
});
