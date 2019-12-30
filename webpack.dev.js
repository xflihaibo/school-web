const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
console.log(devMode);
module.exports = {
    entry: path.resolve('./src/index.tsx'),
    output: {
        path: path.resolve('./dist'),
        filename: 'js/[name].bundle.js',
        publicPath: '/'
    },
    devtool: 'source-map',
    mode: 'development',
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    experimentalWatchApi: true
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'less-loader']
                })
            }
        ]
    },
    devServer: {
        hot: true,
        historyApiFallback: true,
        contentBase: [path.resolve('public')]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        // new MiniCssExtractPlugin({
        //     // Options similar to the same options in webpackOptions.output
        //     // both options are optional
        //     filename: devMode ? '[name].css' : '[name].[hash].css',
        //     chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        // }),
        new HtmlWebpackPlugin({
            inject: 'body',
            filename: 'index.html',
            template: './template/index.html',
            showErrors: true,
            hash: true,
            minify: {
                removeAttributeQuotes: true
            }
        })
    ]
};
