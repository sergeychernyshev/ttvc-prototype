const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: './index.js',
    mode: 'production',
    target: 'web',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'ttvc.js',
        publicPath: ''
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new HtmlInlineScriptPlugin()
    ],
    devServer: {
        compress: true,
        port: 'auto',
        open: true,
    },
};