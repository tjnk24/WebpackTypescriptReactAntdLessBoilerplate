import {MinusOutlined, PlusOutlined} from '@ant-design/icons';
import {Typography} from 'antd';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import {commonActions} from '__commonActions';
import AppLayout from '__components/AppLayout';
import EnhancedButton from '__components/EnhancedButton';
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

                <EnhancedButton
                    buttonProps={{
                        onClick: onIncrementClick,
                        icon: <PlusOutlined/>,
                    }}
                />

                <EnhancedButton
                    buttonProps={{
                        onClick: onDecrementClick,
                        icon: <MinusOutlined/>,
                    }}
                />
            </div>

            <EnhancedButton
                buttonProps={{
                    onClick: onTrowErrorClick,
                }}
            >
                Trigger Error
            </EnhancedButton>

            <EnhancedButton
                buttonProps={{
                    onClick: onGoToUsersClick,
                }}
            >
                Go to Users
            </EnhancedButton>
        </AppLayout>
    );
};

export default Page;
