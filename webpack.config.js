var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.ts',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {test: /\.ts$/, loader: 'ts'},
            {test: /\.html$/, loader: 'html-loader'}
        ]
    },
    resolve:{
        extensions:['','.js','.ts','.html']
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};