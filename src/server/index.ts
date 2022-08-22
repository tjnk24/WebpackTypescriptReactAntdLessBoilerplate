
import express from 'express';

import config from '__config';

import {getHandler} from './getHandler';

if (typeof window === 'undefined') {
    (global as any).window = {};
    (global as any).document = {};
}

const server = express();

server.disable('x-powered-by');

server.use('/build', express.static('build/client'));

server.get('*', getHandler);

server.listen(config.PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on http://localhost:${config.PORT}`);
});
