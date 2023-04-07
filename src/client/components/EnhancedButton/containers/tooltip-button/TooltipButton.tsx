import {Tooltip, TooltipProps} from 'antd';
import React from 'react';

import CommonButton from '../common-button';

import {Props} from './types';

const TooltipButton: Props = ({
    buttonProps,
    tooltipProps,
    children,
    withSpinner,
}) => {
    const {
        trigger = ['hover', 'click'],
        ...tooltipPropsRest
    } = tooltipProps || {} as TooltipProps;

    const {
        ...buttonPropsRest
    } = buttonProps;

    return (
        <Tooltip
            {...tooltipPropsRest}
            trigger={trigger}
        >
            {/* Needs to trigger tooltip */}

            <div></div>

            <CommonButton
                {...buttonPropsRest}
                withSpinner={withSpinner}
            >
                {children}
            </CommonButton>
        </Tooltip>
    );
};

export default TooltipButton;
