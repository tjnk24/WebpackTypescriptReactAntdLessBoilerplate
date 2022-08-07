import loadable from '@loadable/component';
import {Spin} from 'antd';
import React from 'react';

import AppRoute from '__components/AppRoute';
import {ROUTES} from '__routes';

const AsyncPage = loadable(
    () => import('./containers/page'),
    {fallback: <Spin/>},
);

export default (
    <AppRoute
        exact
        path={ROUTES.USERS.INDEX}
        component={AsyncPage}
        title="Users"
    />
);
