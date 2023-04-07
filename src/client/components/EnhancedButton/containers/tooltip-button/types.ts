import {ButtonProps, TooltipProps} from 'antd';
import {FC} from 'react';

export interface OwnProps {
    tooltipProps: TooltipProps;
    buttonProps: ButtonProps;
    withSpinner: boolean;
}

export type Props = FC<OwnProps>;
