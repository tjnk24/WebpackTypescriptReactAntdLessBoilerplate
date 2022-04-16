import {
    Input,
    Table,
    Typography,
} from 'antd';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import {CoreApiGetResponse} from '../../api/types';
import {tableDataIsPendingSelector, tableDataSelector} from '../../selectors/testUserSelectorComponentSelectors';
import {tableDataLoader} from '../../utils/tableDataLoader';

import {b} from './Page.less';

const Core = () => {
    const data = useSelector(tableDataSelector);
    const dataIsPending = useSelector(tableDataIsPendingSelector);

    useEffect(() => {
        void tableDataLoader();
    }, []);

    return (
        <div className={b()}>
            <Typography.Title className={b('title')}>
                Sample Page
            </Typography.Title>

            <Input.Search/>

            <Table<CoreApiGetResponse>
                rowKey={item => item?.id}
                loading={dataIsPending}
                dataSource={data}
            />
        </div>
    );
};

export default Core;
