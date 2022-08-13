import {Menu} from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import {ROUTES} from '__routes';
import {pathnameSelector} from '__selectors/routerSelectors';

const TopNavigation = () => {
    const pathname = useSelector(pathnameSelector);

    return (
        <Menu
            mode="horizontal"
            selectedKeys={[pathname.replace('/', '')]}
        >
            <MenuItem key="users">
                <Link to={ROUTES.USERS.INDEX}>
                    Users
                </Link>
            </MenuItem>

            <MenuItem key="test-page">
                <Link to={ROUTES.TEST_PAGE.INDEX}>
                    Test page
                </Link>
            </MenuItem>
        </Menu>
    );
};

export default TopNavigation;
