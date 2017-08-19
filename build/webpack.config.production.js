const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

let webpackConfig = require('./webpack.config.base')
const PATH = require('./filePath')

webpackConfig.plugins.push(
    new CleanWebpackPlugin(['dist'], {
        root: PATH.ROOT,
        verbose: true,
        dry: false,
        exclude: []
    })
)
webpackConfig.plugins.push(
    new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        comments: false,
        compress: {
            warnings: false,
            screw_ie8: true,
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true,
        },
    })
)

module.exports = webpackConfig