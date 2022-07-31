import React from 'react';
import {Switch} from 'react-router';

import NotFound from '__pages/NotFound';
import TestPage from '__pages/TestPage';
import Users from '__pages/Users';

const AppRoutes = () => {
    return (
        <Switch>
            {Users

            {TestPage}

            {NotFound}
        </Switch>
    );
};

export default AppRoutes;
