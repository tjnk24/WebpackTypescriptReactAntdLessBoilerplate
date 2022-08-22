import {ChunkExtractor} from '@loadable/server';
import {configureStore} from '@reduxjs/toolkit';
import {routerMiddleware} from 'connected-react-router';
import {
    NextFunction,
    Request,
    Response,
} from 'express';
import path from 'path';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';
import {StaticRouter} from 'react-router';

import ErrorBoundary from '__components/ErrorBoundary';
import Core from '__pages/Core';
import {rootReducer} from '__store/configureStore';
import {history} from '__store/history';

import template from './template';

const statsFile = path.resolve('build/client/loadable-stats.json');

export const getHandler = (req: Request, res: Response, next: NextFunction) => {
    try {
        const extractor = new ChunkExtractor({statsFile, entrypoints: ['app']});

        const store = configureStore({
            reducer: rootReducer,
            middleware: [
                routerMiddleware(history),
            ],
        });

        const context = {statusCode: 200};

        const jsx: React.ReactElement = extractor.collectChunks(
            <Provider store={store}>
                <StaticRouter
                    location={req.path}
                    context={context}
                >
                    <ErrorBoundary>
                        <Core/>
                    </ErrorBoundary>
                </StaticRouter>
            </Provider>,
        );

        const html = renderToString(jsx);

        const scripts = extractor.getScriptTags();
        const styles = extractor.getStyleTags();

        res.status(context.statusCode).send(template({html, scripts, styles, store}));
    } catch (error) {
        res.status(500)
            .send(renderToString(<div>something went wrong</div>));

        next(error);
    }
};
