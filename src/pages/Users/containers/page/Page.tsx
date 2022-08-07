import {
    Input,
    Table,
    Typography,
} from 'antd';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import AppLayout from '__components/AppLayout';

import {UsersApiGetResponse} from '../../api/types';
import {tableDataIsPendingSelector, tableDataSelector} from '../../selectors';
import {COLUMNS} from './consts';

import {b} from './Page.less';

const Users = () => {
    const data = useSelector(tableDataSelector);
    const dataIsPending = useSelector(tableDataIsPendingSelector);

    const [searchData, setSearchData] = useState<UsersApiGetResponse[]>([]);

    const onSearch = (value: string) => {
        if (!value) {
            return setSearchData(data);
        }

        const searchingItems = data.filter(({name}) => name.toLowerCase().includes(value));

        setSearchData(searchingItems);
    };

    useEffect(() => {
        setSearchData(data);
    }, [dataIsPending]);

    return (
        <AppLayout className={b()}>
            <Typography.Title>
                Sample Page
            </Typography.Title>

            <div>
                <Typography.Text>
                    * Search by name
                </Typography.Text>

                <Input.Search
                    className={b('searchInput')}
                    placeholder="Type name here"
                    onSearch={onSearch}
                />
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
