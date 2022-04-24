import React from 'react';
import {Route, Switch} from 'react-router';

import NotFound from '__pages/NotFound';
import TestPage from '__pages/TestPage';
import Users from '__pages/Users';

const AppRoutes = () => {
    return (
        <Switch>
            <Route
                exact
                path="/users"
                component={Users}
            />

            <Route
                exact
                path="/test-page"
                component={TestPage}
            />

            <Route
                path="*"
                component={NotFound}
            />
        </Switch>
    );
};

export default AppRoutes;
