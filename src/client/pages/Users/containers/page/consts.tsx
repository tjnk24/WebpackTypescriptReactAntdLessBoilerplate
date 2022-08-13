import {Typography} from 'antd';
import {ColumnsType} from 'antd/lib/table';
import React from 'react';

import {UsersApiGetResponse} from '__pages/Users/api/types';
import {makeTypedName} from '__utils/makeTypedName';

export const COLUMNS: ColumnsType<UsersApiGetResponse> = [
    {
        title: 'Name',
        dataIndex: makeTypedName<UsersApiGetResponse>('name'),
    },
    {
        title: 'Email',
        dataIndex: makeTypedName<UsersApiGetResponse>('email'),
    },
    {
        title: 'Phone',
        dataIndex: makeTypedName<UsersApiGetResponse>('phone'),
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
        dataIndex: makeTypedName<UsersApiGetResponse>('username'),
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
