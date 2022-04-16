import axios from 'axios';

export const configuredApiInstance = axios.create({
    baseURL: process.env.BACKEND_URL,
    timeout: 20000,
});
