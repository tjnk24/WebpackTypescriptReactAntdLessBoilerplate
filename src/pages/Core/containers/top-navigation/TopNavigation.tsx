import {Menu} from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import {pathnameSelector} from '__selectors/routerSelectors';

const TopNavigation = () => {
    const pathname = useSelector(pathnameSelector);

    const defaultKey = pathname.replace('/', '');

    return (
        <Menu mode="horizontal" defaultSelectedKeys={[defaultKey]}>
            <MenuItem key="users">
                <Link to="/users">
                    Users
                </Link>
            </MenuItem>

            <MenuItem key="test-page">
                <Link to="/test-page">
                    Test page
                </Link>
            </MenuItem>
        </Menu>
    );
};

export default TopNavigation;
