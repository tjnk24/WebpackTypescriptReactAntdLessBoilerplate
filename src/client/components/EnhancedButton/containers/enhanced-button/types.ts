import {
    ButtonProps,
    PopconfirmProps,
    TooltipProps,
} from 'antd';
import {FC} from 'react';

export interface OwnProps {
    tooltipProps?: TooltipProps;
    buttonProps?: ButtonProps;
    popconfirmProps?: Omit<PopconfirmProps, 'title'> & {title?: string};
    withSpinner?: boolean;
}

export type Props = FC<OwnProps>;
