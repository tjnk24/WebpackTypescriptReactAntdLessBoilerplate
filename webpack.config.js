const LoadablePlugin = require('@loadable/webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const tsImportPluginFactory = require('ts-import-plugin');
const keysTransformer = require('ts-transformer-keys/transformer').default;
const {createLoadableComponentsTransformer} = require('typescript-loadable-components-plugin');
const {DefinePlugin} = require('webpack');

const alias = require('./configFiles/aliases.js');
const globals = require('./configFiles/globals.js');

const development = process.env.NODE_ENV !== 'production';

const plugins = [
    new DefinePlugin(globals),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
        patterns: [
            {from: 'src/client/images', to: 'images'},
        ],
    }),
    new HtmlWebpackPlugin({
        template: './src/client/index.html',
    }),
    new MiniCssExtractPlugin({
        chunkFilename: '[name].css',
        filename: '[name].css',
        ignoreOrder: true,
    }),
    new LoadablePlugin(),

];

if (development) {
    plugins.push(
        new ForkTsCheckerWebpackPlugin({
            async: true,
            typescript: {
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true,
                },
            },
        }),
        new EslintWebpackPlugin({
            files: 'src/**/*.{ts,tsx,js,jsx}',
            emitError: true,
            failOnError: false,
            emitWarning: true,
            failOnWarning: false,
            cache: true,
        }),
    );
}

module.exports = {
    context: __dirname,
    devtool: development && 'source-map',
    devServer: {
        static: {
            directory: 'build/client',
        },
        liveReload: false,
        open: ['/users'],
        port: process.env.PORT,
        hot: true,
        historyApiFallback: true,
        client: {
            logging: 'error',
            overlay: false,
        },
        devMiddleware: {
            writeToDisk: true,
        },
    },
    name: 'client',
    target: 'web',
    entry: {
        app: ['./src/client/index.tsx'],
    },
    mode: development ? 'development' : 'production',
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname, 'build/client'),
        publicPath: '/build/',
        pathinfo: false,
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src/client'),
        ],
        extensions: ['.js', '.ts', '.tsx', '.json'],
        alias,
        fallback: {
            crypto: false,
        },
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
                                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                                keysTransformer(program),
                                tsImportPluginFactory({
                                    libraryDirectory: 'lib',
                                    libraryName: 'antd',
                                }),
                                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
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
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    'cssnano',
                                    'postcss-preset-env',
                                ],
                            },
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true,
                            },
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]',
                },
            },
            {
                test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]',
                },
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
    plugins,
    optimization: {
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
        },
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
            new CssMinimizerWebpackPlugin(),
        ],
    },
};
