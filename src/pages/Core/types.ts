import {CommonStoreState} from '__store/types';

import {CoreApiGetResponse} from './api/types';

export type CorePageStoreState = CommonStoreState<CoreApiGetResponse[]>;
