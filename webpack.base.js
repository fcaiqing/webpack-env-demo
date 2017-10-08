/*
 * @Author: cq 
 * @Date: 2017-10-07 20:46:15 
 * @Last Modified by: cq
 * @Last Modified time: 2017-10-08 21:02:56
 */
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
                    test: /\.vue$/,
                    use: 'vue-loader'
                }
            ]
        },
        resolve: {
            extensions: [".js", ".json", ".jsx", ".css", ".vue"]
        },
        context: argv.context,
        devtool: env.production ? "source-map" : false,
        plugins: [
            
        ]
    }
}