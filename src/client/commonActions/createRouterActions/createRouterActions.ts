import {routerActions} from 'connected-react-router';

import {store} from '__store/configureStore';
import {RouterState} from '__utils/routing/types';

import {
    RouterActions,
    RouterActionsKeyType,
    RouterActionType,
} from './types';

export const createRouterActions = () => {
    const actions: RouterActions = {};

    Object.keys(routerActions).forEach(key => {
        const methodKey = key as RouterActionsKeyType;

        const routerAction = routerActions[methodKey] as RouterActionType;

        actions[methodKey] = (argumentFirst?: string | number, argumentSecond?: RouterState) =>
            store.dispatch(routerAction(argumentFirst, argumentSecond));
    });

    return actions;
};
