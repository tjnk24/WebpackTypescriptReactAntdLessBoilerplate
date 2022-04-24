import {Typography} from 'antd';
import {ColumnsType} from 'antd/lib/table';
import React from 'react';

import {UsersApiGetResponse} from '__pages/Users/api/types';
import {makeTypeName} from '__utils/makeTypeName';

export const COLUMNS: ColumnsType<UsersApiGetResponse> = [
    {
        title: 'Name',
        dataIndex: makeTypeName<UsersApiGetResponse>('name'),
    },
    {
        title: 'Email',
        dataIndex: makeTypeName<UsersApiGetResponse>('email'),
    },
    {
        title: 'Phone',
        dataIndex: makeTypeName<UsersApiGetResponse>('phone'),
    },
    {
        title: 'Home address',
        render: (_, {address}) => (
            <Typography.Text>
                {`${address?.city}, ${address?.street}, ${address?.zipcode}`}
            </Typography.Text>
        ),
    },
    {
        title: 'Username',
        dataIndex: makeTypeName<UsersApiGetResponse>('username'),
    },
    {
        title: 'Website',
        render: (_, {website}) => (
            <Typography.Link
                href={`https://${website}`}
                target="_blank"
            >
                {website}
            </Typography.Link>
        ),
    },
];
