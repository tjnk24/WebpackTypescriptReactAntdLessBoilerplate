import {MinusOutlined, PlusOutlined} from '@ant-design/icons';
import {Button, Typography} from 'antd';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import {commonActions} from '__commonActions';
import AppLayout from '__components/AppLayout';
import {testGlobalCounterCountSelector} from '__selectors/testGlobalCounterSelectors';
import {routeManager} from '__utils/routing/routeManager';

import {b} from './Page.less';

const Page = () => {
    const globalCount = useSelector(testGlobalCounterCountSelector);

    const [error, setError] = useState<Error>();

    const onTrowErrorClick = () => {
        setError(new Error('An Uncaught Error'));
    };

    const onGoToUsersClick = () => {
        routeManager.goToUsers();
    };

    const onIncrementClick = () => {
        commonActions.testGlobalCounter.setCount(globalCount + 1);
    };

    const onDecrementClick = () => {
        commonActions.testGlobalCounter.setCount(globalCount - 1);
    };

    if (error) {
        throw error;
    }

    return (
        <AppLayout className={b()}>
            <div className={b('globalCountContainer')}>
                <Typography.Text>
                    Global Count: {globalCount}
                </Typography.Text>

                <Button
                    onClick={onIncrementClick}
                    icon={<PlusOutlined/>}
                />

                <Button
                    onClick={onDecrementClick}
                    icon={<MinusOutlined/>}
                />
            </div>

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
