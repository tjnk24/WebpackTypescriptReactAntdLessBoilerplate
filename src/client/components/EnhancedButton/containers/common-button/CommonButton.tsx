import {Button} from 'antd';
import React from 'react';

import {useAsyncButtonClick} from '../../hooks/useAsyncButtonClick';

import {Props} from './types';

const CommonButton: Props = props => {
    const {handleClick, isPending} = useAsyncButtonClick(props?.onClick);

    const {onClick, children, withSpinner, loading, ...buttonPropsRest} = props || {};

    return (
        <Button
            {...buttonPropsRest}
            onClick={withSpinner ? handleClick : onClick}
            loading={isPending || loading}
        >
            {children}
        </Button>
    );
};

export default CommonButton;
