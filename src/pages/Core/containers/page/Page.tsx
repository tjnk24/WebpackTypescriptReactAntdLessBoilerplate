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
import {COLUMNS} from './consts';

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

            <Input.Search
                className={b('searchInput')}
                placeholder="Type name here"
            />

            <Table<CoreApiGetResponse>
                rowKey={item => item?.id}
                loading={dataIsPending}
                dataSource={data}
                columns={COLUMNS}
                pagination={false}
                scroll={{x: true}}
            />
        </div>
    );
};

export default Core;
