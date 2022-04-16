import {Typography} from 'antd';
import {ColumnsType} from 'antd/lib/table';
import React from 'react';

import {CoreApiGetResponse} from '__pages/Core/api/types';
import {makeTypeName} from '__utils/makeTypeName';

export const COLUMNS: ColumnsType<CoreApiGetResponse> = [
    {
        title: 'Name',
        dataIndex: makeTypeName<CoreApiGetResponse>('name'),
    },
    {
        title: 'Email',
        dataIndex: makeTypeName<CoreApiGetResponse>('email'),
    },
    {
        title: 'Phone',
        dataIndex: makeTypeName<CoreApiGetResponse>('phone'),
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
        dataIndex: makeTypeName<CoreApiGetResponse>('username'),
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
