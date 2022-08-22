import loadable from '@loadable/component';
import {Spin} from 'antd';
import React from 'react';

import AppRoute from '__components/AppRoute';
import {ROUTES} from '__routes';

const AsyncPage = loadable(
    () => import(
        /* webpackChunkName: "notFound" */ './containers/page'
    ),
    {fallback: <Spin/>},
);

export default (
    <AppRoute
        exact
        path={ROUTES.NOT_FOUND.INDEX}
        component={AsyncPage}
        title="Not Found"
    />
);
