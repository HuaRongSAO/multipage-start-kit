const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const DashboardPlugin = require('webpack-dashboard/plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')

const PATH = require('./filePath')
const setting = require('./../src/setting')
let webpackConfig = require('./webpack.config.base')
const logger = require('./tool/logger')
const PORT = setting.dev.port || '3000'

webpackConfig.entry.vendor.unshift("webpack-dev-server/client?" +
    `http://${PATH.LOCALHOST}:${PORT}`)

webpackConfig.devtool = 'source-map'

webpackConfig.plugins.push(new DashboardPlugin({
    color: true,
    title: 'Webpack Dash'
}))
webpackConfig.plugins.push(
    new OpenBrowserPlugin({
        url: `http://${PATH.LOCALHOST}:${PORT}/webpack-dev-server`
    })
)

const rennder = () => {
    let compiler = webpack(webpackConfig)
    logger.success('加载webpack配置成功!')
    logger.info('正在启动服务器 ...')
    let server = new webpackDevServer(compiler, {
        contentBase: PATH.SRC,
        publicPath: PATH.PUBLICPATH,
        hot: false,
        quiet: false,
        noInfo: false,
        lazy: false,
        stats: {colors: true},
        setup: function (app) {
            logger.success('服务器启动成功！')
            logger.success('服务器IP：')
            logger.success(`       http://${PATH.LOCALHOST}:${PORT}`)
            logger.success(`       http://${PATH.LAN}:${PORT}`)
        },
    })
    server.listen(PORT)
}

rennder()
