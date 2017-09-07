var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-plugin');
var CompressionWebpackPlugin = require('compression-webpack-plugin');
require('babel-polyfill');

module.exports = {
    devtool: 'eval-source-map',
    entry: ['babel-polyfill', path.resolve(__dirname, './client/index.js')],
    output: {
        path: __dirname + '/public',
        filename: 'js/bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin({
                fallback: 'style-loader',
                use:[
                    'css-loader', 'less-loader'
                ]
            })
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=25000'
        }]
    },
    plugins: [
        new ExtractTextPlugin('css/main.css'),
        new CompressionWebpackPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(js|css)$'
            ),
            threshold: 10240,
            minRatio: 0.8
        })
    ]
}