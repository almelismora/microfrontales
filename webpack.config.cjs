const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (_, argv) => ({
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
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
            }
        ]
    }
})