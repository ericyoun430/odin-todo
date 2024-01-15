const path = require('path');
const HTMLWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist'),
        clean: true,
    },
    devServer: {
        static: './src',
    },
    optimization: {
        runtimeChunk: 'single',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.(jpg|png|svg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.ttf$/i,
                type: "asset/resource",
            }
        ]
    },
    plugins: [
        new HTMLWebPackPlugin({
            template: './src/template.html',
        }),
    ],
}