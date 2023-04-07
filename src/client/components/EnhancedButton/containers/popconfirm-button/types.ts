import {
    ButtonProps,
    PopconfirmProps,
    TooltipProps,
} from 'antd';
import {FC} from 'react';

export interface OwnProps {
    buttonProps: ButtonProps;
    popconfirmProps: Omit<PopconfirmProps, 'title'> & {title?: string};
    tooltipProps?: TooltipProps;
    withSpinner: boolean;
}

export type Props = FC<OwnProps>;
