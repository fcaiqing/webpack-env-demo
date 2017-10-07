/*
 * @Author: cq 
 * @Date: 2017-10-07 20:46:15 
 * @Last Modified by: cq
 * @Last Modified time: 2017-10-07 22:52:12
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
                }
            ]
        },
        resolve: {
            extensions: [".js", ".json", ".jsx", ".css"]
        },
        context: argv.context,
        devtool: env.production ? "source-map" : false,
        plugins: [
            
        ]
    }
}