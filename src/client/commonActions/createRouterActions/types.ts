import {CallHistoryMethodAction, routerActions} from 'connected-react-router';

import {RouterState} from '__utils/routing/types';

export type RouterActions = {[key: string]: RouterActionType};

export type RouterActionsKeyType = keyof typeof routerActions;

export type RouterActionType = (argumentFirst?: string | number, argumentSecond?: RouterState) => CallHistoryMethodAction;
