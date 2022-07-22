import {
    Input,
    Table,
    Typography,
} from 'antd';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import {UsersApiGetResponse} from '../../api/types';
import {tableDataLoader} from '../../loaders/usersTableDataLoader';
import {tableDataIsPendingSelector, tableDataSelector} from '../../selectors/usersDataSelectors';
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
        void tableDataLoader();
    }, []);

    useEffect(() => {
        setSearchData(data);
    }, [dataIsPending]);

    return (
        <div className={b()}>
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
                rowKey={item => item?.id}
                loading={dataIsPending}
                dataSource={searchData}
                columns={COLUMNS}
                pagination={false}
                scroll={{x: true}}
            />
        </div>
    );
};

export default Users;
