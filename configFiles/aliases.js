const path = require('path');

module.exports = {
    '__components': path.resolve(__dirname, '../src/client/components'),
    '__pages': path.resolve(__dirname, '../src/client/pages'),
    '__utils': path.resolve(__dirname, '../src/client/utils'),
    '__types': path.resolve(__dirname, '../src/client/types'),
    '__store': path.resolve(__dirname, '../src/client/store'),
    '__reducers': path.resolve(__dirname, '../src/client/reducers'),
    '__selectors': path.resolve(__dirname, '../src/client/selectors'),
    '__commonActions': path.resolve(__dirname, '../src/client/commonActions'),
    '__routes': path.resolve(__dirname, '../src/client/routes.ts'),
    '__config': path.resolve(__dirname, '../src/client/config.ts'),
}
