'use strict';

const webpack              = require('webpack');
const merge                = require('webpack-merge');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const helpers              = require('./helpers');
const commonConfig         = require('./webpack.config.common');
const environment          = require('./env/dev.env');
const path                 = require('path');
const HtmlWebpackPlugin    = require('html-webpack-plugin');
// const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
// const CopyWebpackPlugin = require('copy-webpack-plugin')


const webpackConfig = merge(commonConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[id].chunk.js'
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new webpack.EnvironmentPlugin(environment),
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsPlugin(),
        // new HtmlWebpackPlugin({
        //     template: './index.html',
        //     favicon: './public/favicon.ico'
        // })
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true,
            favicon: path.resolve('public/favicon.ico')
        })
        // new FaviconsWebpackPlugin("./public/favicon.ico"),
        // new CopyWebpackPlugin({
        //     patterns: [
        //         {
        //             from: path.join('favicon.ico','../static'),
        //             to: 'static'   //相对output的publicPath路径 ，我这里是publicPath: '/'
        //         }
        //     ]
        // }),
    ],
    devServer: {
        compress: true,
        historyApiFallback: true,
        hot: true,
        open: true,
        overlay: true,
        port: 8000,
        stats: {
            normal: true
        }
    }
});

module.exports = webpackConfig;