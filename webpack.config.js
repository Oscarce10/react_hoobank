const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true
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
