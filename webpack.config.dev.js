const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const options = {
    extensions: ['js', 'jsx'],
    exclude: [
        '/node_modules/',
    ],
};

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new htmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin(),
        new ESLintPlugin(),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./dist directory is being served
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['dist'] }
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            // HTML plugin
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'html-loader',
                    }
                ]
            },
            // CSS/SASS plugin
            {
                test: /\.s?css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }

        ]
    }
}
