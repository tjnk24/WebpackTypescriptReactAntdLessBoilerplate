import {ReactNode} from 'react';

export interface State {
    error: Error | null;
    errorInfo: any;
}

export interface Props {
    children: ReactNode;
}
