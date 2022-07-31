import {store} from '__store/configureStore';

import {AsyncGetRequest, BaseActions} from './types';

const {dispatch} = store;

export const createLoader = <T>(actions: BaseActions<T>, apiGetRequest: AsyncGetRequest<T>) => {
    const {pending, success, failed} = actions;

    return async () => {
        try {
            dispatch(pending());

            const data = await apiGetRequest();

            dispatch(success(data));

            return data;
        } catch (error: unknown | any) {
            dispatch(failed(error?.message as string));
        }
    };
};
