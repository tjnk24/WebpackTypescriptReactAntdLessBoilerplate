import {Button} from 'antd';
import React, {useState} from 'react';

import AppLayout from '__components/AppLayout';

const Page = () => {
    const [error, setError] = useState<Error>();

    const onTrowErrorClick = () => {
        setError(new Error('An Uncaught Error'));
    };

    if (error) {
        throw error;
    }

    return (
        <AppLayout>
            <Button onClick={onTrowErrorClick}>
                Trigger Error
            </Button>
        </AppLayout>
    );
};

export default Page;
