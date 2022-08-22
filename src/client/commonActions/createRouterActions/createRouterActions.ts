import {routerActions} from 'connected-react-router';

import {store} from '__store/configureStore';
import {RouterState} from '__utils/routing/types';

import {
    RouterActionsKeyType,
    RouterActionType,
    RouterArgumentType,
} from './types';

export const createRouterActions = () => {
    const actions = {} as {[key: string]: RouterActionType};

    Object.keys(routerActions).forEach(key => {
        const methodKey = key as RouterActionsKeyType;

        const routerAction = routerActions[methodKey] as RouterActionType;

        actions[methodKey] = (arg0?: RouterArgumentType, arg1?: RouterState) => store.dispatch(routerAction(arg0, arg1));
    });

    return actions;
};
