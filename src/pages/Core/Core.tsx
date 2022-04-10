import {
    Input,
    Table,
    Typography,
} from 'antd';
import React from 'react';

import {b} from './Core.less';

const Core = () => {
    return (
        <div className={b()}>
            <Typography.Title className={b('title')}>
                Sample Page
            </Typography.Title>

            <Input.Search/>

            <Table/>
        </div>
    );
};

export default Core;
