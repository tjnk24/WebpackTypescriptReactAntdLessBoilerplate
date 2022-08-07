const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const DotenvWebpack = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const development = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: development ? 'development' : 'production',
    entry: './src/index.tsx',
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        clean: true,
    },
    devtool: development && 'source-map',
    devServer: {
        port: 8080,
        static: path.resolve(__dirname, 'src'),
        historyApiFallback: true,
        devMiddleware: {
            writeToDisk: true,
        },
        client: {
            overlay: false,
        },
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
            '__components': path.resolve(__dirname, 'src', 'components'),
            '__pages': path.resolve(__dirname, 'src', 'pages'),
            '__utils': path.resolve(__dirname, 'src', 'utils'),
            '__types': path.resolve(__dirname, 'src', 'types'),
            '__store': path.resolve(__dirname, 'src', 'store'),
            '__reducers': path.resolve(__dirname, 'src', 'reducers'),
            '__selectors': path.resolve(__dirname, 'src', 'selectors'),
            '__commonActions': path.resolve(__dirname, 'src', 'commonActions'),
            '__routes': path.resolve(__dirname, 'src', 'routes'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                exclude: /node_modules/,
                use: [{loader: 'ts-loader'}],
            },
            {
                test:/\.less$/,
                use: [
                    {loader: './loaders/b-loader.js'},
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
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerWebpackPlugin(),
        ],
    },
    plugins: [
        new DotenvWebpack(),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {from: 'src/images', to: 'images'},
            ],
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            chunkFilename: '[name].css',
            filename: '[name].css',
            ignoreOrder: true,
        }),
    ],
};
