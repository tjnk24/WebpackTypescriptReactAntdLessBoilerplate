/* eslint-disable @typescript-eslint/no-unsafe-argument */
// webpack.config.server.js
const path = require('path');
const tsImportPluginFactory = require('ts-import-plugin');
const keysTransformer = require('ts-transformer-keys/transformer').default;
const {createLoadableComponentsTransformer} = require('typescript-loadable-components-plugin');
const {DefinePlugin} = require('webpack');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const globals = require('./configFiles/globals.js');
const alias = require('./configFiles/aliases.js');

const development = process.env.NODE_ENV !== 'production';

module.exports = {
    name: 'server',
    entry: {
        app: ['./src/server/index.ts']
    },
    context: __dirname,
    target: 'node',
    devtool: undefined,
    mode: 'development',
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.json'],
        alias,
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src/client'),
        ],
    },
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'build/server'),
    },
    externals: [nodeExternals()],
    node: {
        __dirname: false,
    },
    module: {
        rules: [
            {
                test: /\.m?js/,
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.(jsx|tsx|js|ts)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        happyPackMode: true,
                        configFile: path.resolve(__dirname, 'tsconfig.json'),
                        transpileOnly: true,
                        getCustomTransformers: program => ({
                            before: [
                                keysTransformer(program),
                                tsImportPluginFactory({
                                    libraryDirectory: 'lib',
                                    libraryName: 'antd',
                                }),
                                createLoadableComponentsTransformer(program, {}),
                            ],
                        }),
                    },
                }],
            },
            {
                test:/\.less$/,
                use: [
                    {loader: './configFiles/loaders/b-loader.js'},
                    {loader: 'null-loader'},
                ],
            },
            {
                test:/\.css$/,
                use: [
                    {loader: './configFiles/loaders/b-loader.js'},
                    {loader: 'null-loader'},
                ],
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: ['url-loader?limit=10000!img-loader?progressive=true']
            },
            {
                test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                use: ['file-loader?name=fonts/[name].[ext]']
            },
            {
                test: /\.svg$/,
                use: ['svg-inline-loader']
            },
        ],
    },
    stats: (
        development
            ? {
                all: undefined,
                builtAt: !development,
                chunks: !development,
                assets: !development,
                errors: true,
                warnings: development,
                outputPath: true,
                timings: true,
            }
            : 'errors-only'
    ),
    performance: {
        hints: false,
    },
    plugins: [
        new DefinePlugin(globals),
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
        }),
        new webpack.ProvidePlugin({
            window: path.resolve(__dirname, './configFiles/window.mock'),
            document: 'global/document',
        }),
    ],
    optimization: {
        minimize: false,
        splitChunks: {
            cacheGroups: {
                default: false,
            },
        },
    },
    resolveLoader: {
        modules: [
            'node_modules',
            'configFiles/loaders',
        ],
    },
};
