import {ButtonProps} from 'antd';
import {FC} from 'react';

export type OwnProps = ButtonProps & {
    withSpinner: boolean;
};

export type Props = FC<OwnProps>;
