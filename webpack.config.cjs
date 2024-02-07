const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (_, argv) => ({
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    experiments: {
        outputModule: true
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },
    devtool: argv.mode === 'development' ? 'source-map' : false,
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                type: 'javascript/auto',
                resolve: {
                    fullySpecified: false
                },
            },
            {
                test: /\.(ts|tsx|js|mjs|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css|s[ac]ss$/i,
                exclude: /node_modules/,
                use: [ argv.mode === "development" ? "style-loader" : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2|mp3|mp4|wav|webm)$/i,
                exclude: /node_modules/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext]'
                }
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: ['html-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            scriptLoading: 'module'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
}) 
