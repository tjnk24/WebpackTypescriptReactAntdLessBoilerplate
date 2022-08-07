
import {FC} from 'react';
import {RouteProps} from 'react-router';

export type OwnProps = RouteProps & {
    component: Pick<RouteProps, 'component'>;
    componentProps?: {[key: string]: unknown};
    statusCode?: number;
    title: string;
    ogImageUrl?: string;
    description?: string;
};

export type Props = FC<OwnProps>;
