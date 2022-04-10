import React from 'react';
import 'antd/dist/antd.less';
import {createRoot} from 'react-dom/client';

import ErrorBoundary from '__components/ErrorBoundary';
import Core from '__pages/Core';

import './less/main.less';

const rootContainer = document.getElementById('root') as Element;

const root = createRoot(rootContainer);

const renderElement = (
    <ErrorBoundary>
        <Core/>
    </ErrorBoundary>
);

root.render(renderElement);
