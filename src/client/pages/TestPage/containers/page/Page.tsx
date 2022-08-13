import {Button} from 'antd';
import React, {useState} from 'react';

import AppLayout from '__components/AppLayout';
import {routeManager} from '__utils/routing/routeManager';

import {b} from './Page.less';

const Page = () => {
    const [error, setError] = useState<Error>();

    const onTrowErrorClick = () => {
        setError(new Error('An Uncaught Error'));
    };

    const onGoToUsersClick = () => {
        routeManager.goToUsers();
    };

    if (error) {
        throw error;
    }

    return (
        <AppLayout className={b()}>
            <Button onClick={onTrowErrorClick}>
                Trigger Error
            </Button>

            <Button onClick={onGoToUsersClick}>
                Go to Users
            </Button>
        </AppLayout>
    );
};

export default Page;
