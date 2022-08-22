import {routerActions} from 'connected-react-router';

import {store} from '__store/configureStore';
import {RouterState} from '__utils/routing/types';

import {
    RouterActionsKeyType,
    RouterActionType,
} from './types';

export const createRouterActions = () => {
    const actions = {} as {[key: string]: RouterActionType};

    Object.keys(routerActions).forEach(key => {
        const methodKey = key as RouterActionsKeyType;

        const routerAction = routerActions[methodKey] as RouterActionType;

        actions[methodKey] = (argumentFirst?: string | number, argumentSecond?: RouterState) =>
            store.dispatch(routerAction(argumentFirst, argumentSecond));
    });

    return actions;
};
