import {Menu} from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import React from 'react';
import {Link} from 'react-router-dom';

const TopNavigation = () => {
    return (
        <Menu mode="horizontal">
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
