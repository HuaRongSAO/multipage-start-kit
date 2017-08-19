const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function entries(entryJsPath) {
    var entryFiles = glob.sync(entryJsPath + '/**/*.js')
    var map = {}
    for (var i = 0; i < entryFiles.length; i++) {
        var filePath = entryFiles[i];
        var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
        map[filename] = filePath;
    }
    return map
}

function html_plugins(viewPAth, faviconPath) {
    var entryHtml = glob.sync(viewPAth + '/**/*.html')
    var htmlPluginItems = []
    var entriesFiles = entries(viewPAth)
    for (var i = 0; i < entryHtml.length; i++) {
        var filePath = entryHtml[i]
        var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
        var conf = {
            template: filePath,
            filename: filename + '.html',
            favicon: faviconPath,
            hash: false, // 为静态资源生成hash值
            minify: {
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
        }
        //如果和入口js文件同名
        if (filename in entriesFiles) {
            conf.inject = 'body'
            conf.chunks = ['vendor', filename]
        }
        //跨页面引用，如pageA,pageB 共同引用了common-a-b.js，那么可以在这单独处理
        //if(pageA|pageB.test(filename)) conf.chunks.splice(1,0,'common-a-b')
        htmlPluginItems.push(new HtmlWebpackPlugin(conf))
    }
    return htmlPluginItems
}

module.exports = {
    html_plugins,
    entries
}