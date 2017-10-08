/*
 * @Author: cq 
 * @Date: 2017-10-07 21:59:00 
 * @Last Modified by: cq
 * @Last Modified time: 2017-10-08 20:44:33
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
console.log(env);
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
            filename: "build.html"
        }),
        new CopyWebpackPlugin([
            {
                from: './src/libs/vue.js',
                to: './libs/vue.js'
            }
        ])
    ]
})
