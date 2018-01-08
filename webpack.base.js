/*
 * @Author: cq 
 * @Date: 2017-10-07 20:46:15 
 * @Last Modified by: cq
 * @Last Modified time: 2018-01-08 15:30:36
 */

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack=require('webpack');

module.exports = function (env, argv) {
    return {
        entry: argv.entry,
        output: argv.output,
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                      loader: 'babel-loader',
                      options: {
                        presets: ['env']
                      }
                    }
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: ["css-loader", "postcss-loader"]
                    })
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                            fallback: "style-loader",
                            use: ['css-loader', 'postcss-loader', 'sass-loader']
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
                                name:"assets/img/[name].[ext]?[hash:5]",    //图片路径和文件名格式
                                limit: 8192
                            }
                        }
                    ]
                }
            ]
        },
        resolve: {
            extensions: [".js", ".json", ".jsx", ".css", ".vue"],
            alias: {
                'vue$': 'vue/dist/vue.js'
            }
        },
        context: argv.context,
        devtool: env.prod ? "source-map" : false,
        plugins: [
            new ExtractTextPlugin({
                filename: 'css/[name].css?[hash:5]',
                ignoreOrder: true
            }),
        ]
    }
}