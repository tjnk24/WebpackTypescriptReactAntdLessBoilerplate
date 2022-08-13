import {loadableReady} from '@loadable/component';
import {ConnectedRouter} from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.less';
import {Provider} from 'react-redux';
import './less/main.less';

import ErrorBoundary from '__components/ErrorBoundary';
import Core from '__pages/Core';
import {store} from '__store/configureStore';
import {history} from '__store/history';

const renderElement = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ErrorBoundary>
                <Core/>
            </ErrorBoundary>
        </ConnectedRouter>
    </Provider>
);

const render = () => {
    ReactDOM.render(renderElement, document.getElementById('root'));
};

void loadableReady(() => {
    render();
});
