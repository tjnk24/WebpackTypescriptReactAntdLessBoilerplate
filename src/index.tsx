import {ConnectedRouter} from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.less';
import {Provider} from 'react-redux';
import './less/main.less';

import ErrorBoundary from '__components/ErrorBoundary';
import Core from '__pages/Core';
import {store, history} from '__store/configureStore';

const renderElement = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ErrorBoundary>
                <Core/>
            </ErrorBoundary>
        </ConnectedRouter>
    </Provider>
);

ReactDOM.render(renderElement, document.getElementById('root'));
