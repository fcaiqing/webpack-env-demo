/*
 * @Author: cq 
 * @Date: 2017-10-07 20:46:15 
 * @Last Modified by: cq
 * @Last Modified time: 2017-12-12 15:05:40
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
                    use: 'vue-loader'
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
            new webpack.LoaderOptionsPlugin({options: {postcss: [autoprefixer]}}),
            new ExtractTextPlugin({
                filename: 'css/[name].css?[hash:5]',
                ignoreOrder: true
            }),
        ]
    }
}