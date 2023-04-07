import React from 'react';
import {Switch} from 'react-router';

import NotFound from '../../../NotFound';
import TestPage from '../../../TestPage';
import Users from '../../../Users';

const AppRoutes = () => {
    return (
        <Switch>
            {Users}

            {TestPage}

            {NotFound}
        </Switch>
    );
};

export default AppRoutes;
