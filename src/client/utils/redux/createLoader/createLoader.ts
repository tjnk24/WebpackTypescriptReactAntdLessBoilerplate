import {store} from '__store/configureStore';

import {AsyncRequest, BaseActions} from './types';

const {dispatch} = store;

export const createLoader = <T>(actions: BaseActions<T>, apiRequest: AsyncRequest<T>) => {
    const {pending, success, failed} = actions;

    return async () => {
        try {
            dispatch(pending());

            const response = await apiRequest();

            dispatch(success(response));

            return response;
        } catch (error: unknown | any) {
            dispatch(failed(error?.message as string));
        }
    };
};
