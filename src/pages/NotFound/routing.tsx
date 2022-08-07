import loadable from '@loadable/component';
import {Spin} from 'antd';
import React from 'react';
import {Route} from 'react-router';

import {ROUTES} from '__routes';

const AsyncPage = loadable(
    () => import('./containers/page'),
    {fallback: <Spin/>},
);

export default (
    <Route
        path={ROUTES.NOT_FOUND.INDEX}
        component={AsyncPage}
    />
);
