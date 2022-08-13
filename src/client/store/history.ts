import {RouterState} from 'connected-react-router';
import {createBrowserHistory, Location} from 'history';

export type RouterHistory = RouterState & {
    location: Location;
}

export const history = createBrowserHistory();
