import {Helmet} from 'react-helmet';
import serialize from 'serialize-javascript';

import {RendererOptions} from './types';

export default ({
    html,
    scripts,
    styles,
    store,
}: RendererOptions) => {
    const helmet = Helmet.renderStatic();

    return `<!doctype html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <meta name="google" content="notranslate">

                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}

                <link rel="icon" type="image/png" href="/build/images/favicon.ico">

                ${styles}
            </head>

            <body>
                <div id="root">${html}</div>

                <script>window.__PRELOADED_STATE__ = ${serialize(store.getState()).replace(/</g, '\\\u003c')}</script>
                ${scripts}
            </body>
        </html>`;
};
