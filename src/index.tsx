import React from 'react';
import 'antd/dist/antd.less';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';

import './less/main.less';

import ErrorBoundary from '__components/ErrorBoundary';
import Core from '__pages/Core';
import {store} from '__store/base';

const rootContainer = document.getElementById('root') as Element;

const root = createRoot(rootContainer);

const renderElement = (
    <Provider store={store}>
        <ErrorBoundary>
            <Core/>
        </ErrorBoundary>
    </Provider>
);

root.render(renderElement);
