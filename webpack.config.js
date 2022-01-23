/*
 * @Author: Sunny
 * @Date: 2022-01-15 18:37:03
 * @LastEditors: Suuny
 * @LastEditTime: 2022-01-17 20:20:24
 * @Description: webpack 配置文件
 * @FilePath: /webpack-loader/webpack.config.js
 */
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // 将路径或路径判断解析为绝对路径
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.xml$/,
                use: ['xml-loader']
            }
        ]
    },
    resolveLoader: { // 配置别名的方式
        modules: [path.join(__dirname, '/src/loader')]
    },
    devServer: {
        contentBase: './dist',
        overlay: {
            warnings: true,
            errors: true
        },
        open: true
    }
}