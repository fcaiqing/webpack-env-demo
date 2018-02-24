/*
 * @Author: cq 
 * @Date: 2018-01-09 11:27:04 
 * @Last Modified by: cq
 * @Last Modified time: 2018-01-17 17:10:50
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
        index: "./app/js/index.js"
    },
    "output": {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].build.js?[hash:5]"
    },
    "context": __dirname
}), {
    plugins: [
        new HtmlWebpackPlugin({
            title: "王成霸业",
            template: "./app/index.html",
            filename: "template.htm",
        })
    ]
})
