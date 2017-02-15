const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: [
        "./app/app.js",
        "webpack/hot/only-dev-server",
        "webpack-dev-server/client?http://localhost:9000"
    ],
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, 'dist'),
        filename: "assets/[name].js"
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        host: "localhost",
        port: 9000
    },
    watchOptions: {
        aggregateTimeout: 200
    },
    devtool: "eval",
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: "style-loader",
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            filename: "./index.html",
            template: path.join(__dirname, "src/static/index.html"),
            inject: "body"
        })
    ]
}