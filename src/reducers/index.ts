import {connectRouter} from 'connected-react-router';

import {history, RouterHistory} from '__store/history';

export type BaseStore = {
    router: RouterHistory;
}

export const reducers = {
    router: connectRouter(history),
};
