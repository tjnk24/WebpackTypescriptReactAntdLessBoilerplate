import {Typography} from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';

import {ROUTES} from '__routes';

import AppLayout from '../AppLayout';
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
                <AppLayout>
                    <Typography.Text>
                        Something went wrong, application crashed
                    </Typography.Text>

                    <br/>

                    <Link to={ROUTES.USERS.INDEX}>
                        Return to users page
                    </Link>
                </AppLayout>
            );
        }

        return children;
    }
}
