import React from 'react';

import CommonButton from '../common-button';
import PopconfirmButton from '../popconfirm-button';
import TooltipButton from '../tooltip-button';

import {Props} from './types';

const EnhancedButton: Props = ({
    buttonProps,
    popconfirmProps,
    tooltipProps,
    children,
    withSpinner = true,
}) => {
    const commonChildren = children || buttonProps?.children;

    if (tooltipProps && popconfirmProps) {
        return (
            <PopconfirmButton
                buttonProps={buttonProps}
                popconfirmProps={popconfirmProps}
                tooltipProps={tooltipProps}
                withSpinner={withSpinner}
            >
                {commonChildren}
            </PopconfirmButton>
        );
    }

    if (tooltipProps) {
        return (
            <TooltipButton
                buttonProps={buttonProps}
                tooltipProps={tooltipProps}
                withSpinner={withSpinner}
            >
                {commonChildren}
            </TooltipButton>
        );
    }

    if (popconfirmProps) {
        return (
            <PopconfirmButton
                buttonProps={buttonProps}
                popconfirmProps={popconfirmProps}
                withSpinner={withSpinner}
            >
                {commonChildren}
            </PopconfirmButton>
        );
    }

    return (
        <CommonButton
            {...buttonProps}
            withSpinner={withSpinner}
        >
            {commonChildren}
        </CommonButton>
    );
};

export default EnhancedButton;
