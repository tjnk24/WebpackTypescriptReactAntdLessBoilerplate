import axios from 'axios';

import config from '__config';

export const configuredApiInstance = axios.create({
    baseURL: config.BACKEND_URL,
    timeout: 20000,
});
