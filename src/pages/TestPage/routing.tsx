import React from 'react';
import {Route} from 'react-router';

import {ROUTES} from '__routes';

import Page from './containers/page';

export default (
    <Route
        exact
        path={ROUTES.TEST_PAGE.INDEX}
        component={Page}
    />
);
