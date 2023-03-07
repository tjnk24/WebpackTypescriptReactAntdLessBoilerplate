import {
    Button,
    Input,
    Table,
    Typography,
} from 'antd';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import AppLayout from '__components/AppLayout';
import {testGlobalCounterCountSelector} from '__selectors/testGlobalCounterSelectors';
import {routeManager} from '__utils/routing/routeManager';

import {UsersApiGetResponse} from '../../api/types';
import {tableDataIsPendingSelector, tableDataSelector} from '../../selectors';
import {COLUMNS} from './consts';

import {b} from './Page.less';

const Users = () => {
    const data = useSelector(tableDataSelector);
    const dataIsPending = useSelector(tableDataIsPendingSelector);
    const globalCount = useSelector(testGlobalCounterCountSelector);

    const [searchData, setSearchData] = useState<UsersApiGetResponse[]>([]);

    const onSearch = (value: string) => {
        if (!value) {
            return setSearchData(data);
        }

        const searchingItems = data.filter(({name}) => name.toLowerCase().includes(value));

        setSearchData(searchingItems);
    };

    const onGoToTestPageClick = () => {
        routeManager.goToTestPage();
    };

    useEffect(() => {
        setSearchData(data);
    }, [dataIsPending]);

    return (
        <AppLayout className={b()}>
            <Typography.Text>
                Global Count: {globalCount}
            </Typography.Text>

            <Typography.Title>
                Sample Page
            </Typography.Title>

            <div className={b('bottomWrapper')}>
                <Typography.Text>
                    * Search by name
                </Typography.Text>

                <Input.Search
                    className={b('searchInput')}
                    placeholder="Type name here"
                    onSearch={onSearch}
                    allowClear
                />

                <Button
                    className={b('goToTestPageButton')}
                    onClick={onGoToTestPageClick}
                >
                    Go to Test page
                </Button>
            </div>

            <Table<UsersApiGetResponse>
                dataSource={searchData}
                loading={dataIsPending}
                rowKey={item => item?.id}
                columns={COLUMNS}
                pagination={false}
                scroll={{x: true}}
            />
        </AppLayout>
    );
};

export default Users;
