import {FC} from 'react';

import {RegistryReducers} from '../reducerRegistry/types';

export type WithReducerProps = {
    Component: FC;
    reducers: RegistryReducers;
}
