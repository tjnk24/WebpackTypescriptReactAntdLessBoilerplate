import {routerActions, RouterActionType} from 'connected-react-router';

import {store} from '__store/configureStore';

type RouterActionsType = typeof routerActions;

export const createRouterActions = () => {
    const actions = {} as RouterActionsType;

    Object.keys(routerActions).forEach(key => {
        const methodKey = key as keyof RouterActionsType;

        const routerAction: RouterActionType = routerActions[methodKey];

        actions[methodKey] = (...args: Parameters<RouterActionType>) => store.dispatch(routerAction(...args));
    });

    return actions;
};
