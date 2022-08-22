import {RouterState} from 'connected-react-router';
import {
    createBrowserHistory,
    createMemoryHistory,
    Location,
} from 'history';

import config from '__config';

export type RouterHistory = RouterState & {
    location: Location;
}

const isServer = !(
    typeof window !== 'undefined' &&
    window.document
);

export const history = !isServer
    ? createBrowserHistory({basename: config.BASE_FRONTEND_URL})
    : createMemoryHistory({initialEntries: [config.BASE_FRONTEND_URL]});
