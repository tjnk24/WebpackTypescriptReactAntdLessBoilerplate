import {ROUTES} from '__routes';

import {routerPush} from './routerPush';

class RouteManager {
    public goToUsers = (isHref?: boolean) => {
        return routerPush({path: ROUTES.USERS.INDEX}, isHref);
    };

    public goToTestPage = (isHref?: boolean) => {
        return routerPush({path: ROUTES.TEST_PAGE.INDEX}, isHref);
    };

    public goToNotFound = (isHref?: boolean) => {
        return routerPush({path: ROUTES.NOT_FOUND.INDEX}, isHref);
    };
}

export const routeManager = new RouteManager();
