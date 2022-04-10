import {Typography} from 'antd';
import React from 'react';

import {Props, State} from './types';

export default class ErrorBoundary extends React.PureComponent<Props, State> {
    public state: State = {
        error: null,
        errorInfo: null,
    };

    public componentDidCatch(error: Error, errorInfo: unknown) {
        this.setState({error, errorInfo});
    }

    public render() {
        const {state} = this;
        const {children} = this.props;

        if (state.errorInfo) {
            return (
                <Typography.Text>
                    Something went wrong, application crashed
                </Typography.Text>
            );
        }

        return children;
    }
}
