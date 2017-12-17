/*
 * @Author: cq 
 * @Date: 2017-12-12 11:34:42 
 * @Last Modified by: cq
 * @Last Modified time: 2017-12-17 10:59:53
 */


//模块
const BaseConfig = require('../webpack.base');
const WebpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require("path");

//变量
const env = {
    "prod": process.env.NODE_ENV === "prod" ? true : false,
    "dev": process.env.NODE_ENV === "dev" ? true : false,
}

//导出公共配置
module.exports = WebpackMerge(BaseConfig(env, {
    "entry": {
        main: "./src/main.js"
    },
    "output": {
        path: path.resolve(__dirname, "build"),
        filename: "[name].build.js"
    },
    "context": __dirname
}), {
    plugins: [
        new HtmlWebpackPlugin({
            title: "cq",
            template: "./src/index.html",
            filename: "index.html"
        })
    ]
})
