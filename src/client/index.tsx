import {loadableReady} from '@loadable/component';
import {ConnectedRouter} from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './less/main.less';

import ErrorBoundary from '__components/ErrorBoundary';
import config from '__config';
import Core from '__pages/Core';
import {store} from '__store/configureStore';
import {history} from '__store/history';

const render = () => {
    ReactDOM.render(
        (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <ErrorBoundary>
                        <Core/>
                    </ErrorBoundary>
                </ConnectedRouter>
            </Provider>
        ),
        document.getElementById('root'),
    );
};

if (config.HMR === 'enabled') {
    render();
} else {
    void loadableReady(() => {
        render();
    });
}
