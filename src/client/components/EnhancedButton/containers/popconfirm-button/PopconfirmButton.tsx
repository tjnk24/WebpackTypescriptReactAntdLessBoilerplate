import {Popconfirm} from 'antd';
import React from 'react';

import {useAsyncButtonClick} from '../../hooks/useAsyncButtonClick';
import TooltipButton from '../tooltip-button';

import {Props} from './types';

const PopconfirmButton: Props = ({
    buttonProps,
    popconfirmProps,
    children,
    tooltipProps,
    withSpinner,
}) => {
    const {handleClick, isPending} = useAsyncButtonClick(popconfirmProps?.onConfirm);

    const {
        okButtonProps,
        title = 'Are You Sure',
        onConfirm,
        okText = 'Yes',
        disabled = buttonProps?.disabled,
        ...popconfirmPropsRest
    } = popconfirmProps;

    return (
        <Popconfirm
            {...popconfirmPropsRest}
            onConfirm={withSpinner ? handleClick : onConfirm}
            okButtonProps={{...okButtonProps, loading: isPending}}
            okText={okText}
            disabled={disabled}
            title={title}
        >
            {/* Needs to trigger tooltip and popconfirm */}

            <div></div>

            <TooltipButton
                buttonProps={{
                    ...buttonProps,
                    loading: isPending,
                }}
                tooltipProps={tooltipProps}
                withSpinner={withSpinner}
            >
                {children}
            </TooltipButton>
        </Popconfirm>
    );
};

export default PopconfirmButton;
