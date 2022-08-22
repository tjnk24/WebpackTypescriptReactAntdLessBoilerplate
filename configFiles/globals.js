module.exports = {
    'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        HMR: JSON.stringify(process.env.HMR),
        BACKEND_URL: JSON.stringify(process.env.BACKEND_URL),
        BASE_FRONTEND_URL: JSON.stringify(process.env.BASE_FRONTEND_URL || '/'),
        PORT: JSON.stringify(process.env.PORT || 8080),
    },
};
