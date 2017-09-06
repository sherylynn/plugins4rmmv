import webpack from 'webpack';
import fs from 'fs';
import path from 'path';
//const HtmlWebpackPlugin = require('html-webpack-plugin');

export default {
    cache: true,
    entry: [
        './src/index.js'
    ],
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, "game"),
      hot: true
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'game/js/plugins/')
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: [
                path.resolve(__dirname, "node_modules"),
            ],
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    plugins: [
        /*
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement'
          }),
          */
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
    resolve: {
        extensions: ['*', '.js', '.json']
    }
}
