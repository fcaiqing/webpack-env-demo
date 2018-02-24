/*
 * @Author: cq 
 * @Date: 2017-10-07 20:46:15 
 * @Last Modified by: cq
 * @Last Modified time: 2018-02-12 09:55:35
 */

const autoprefixer = require('autoprefixer');
const webpack=require('webpack');
const path = require("path");
var  ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (env, argv) {
    return {
        entry: argv.entry,
        output: argv.output,
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: ["css-loader", "postcss-loader"],
                    })
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                            fallback: "style-loader",
                            use: ['css-loader', 'postcss-loader', 'sass-loader'],
                        })
                },
                {
                    test: /\.vue$/,
                    use: {
                        loader: 'vue-loader',
                        options: {
                            loaders: {
                                sass: ExtractTextPlugin.extract({
                                    use: ['css-loader', 'postcss-loader', 'sass-loader'],
                                    fallback: 'vue-style-loader'
                                })
                            }
                        }
                    }
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                name:"img/[name].[ext]?[hash:5]",//css文件中图片生成路径和文件名格式
                                limit: 8192,
                                publicPath: "../"
                            }
                        }
                    ]
                },
            ]
        },
        resolve: {
            extensions: [".js", ".json", ".jsx", ".css", ".vue"],
            alias: {
                'vue$': 'vue/dist/vue.js',
                'jquery$': path.resolve(argv.context, 'src/js/libs/jquery-3.1.1.min'),
                'jqPagination$': path.resolve(argv.context, 'src/js/libs/jquery.pagination.min'),
                'jqPage$': path.resolve(argv.context, 'src/js/libs/jquery.paging.min'),
            }
        },
        context: argv.context,
        devtool: env.prod ? "source-map" : false,
        plugins: [

        ]
    }
}