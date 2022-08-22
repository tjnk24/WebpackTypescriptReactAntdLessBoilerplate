import {CallHistoryMethodAction, routerActions} from 'connected-react-router';

import {RouterState} from '__utils/routing/types';

export type RouterActionsKeyType = keyof typeof routerActions;

export type RouterArgumentType = string | number;

export type RouterActionType = (arg0?: RouterArgumentType, arg1?: RouterState) => CallHistoryMethodAction;
