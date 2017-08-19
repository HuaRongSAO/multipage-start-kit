const fs = require('fs')
const watch = require('watch')
const PATH = require('./../filePath')


const watchFile = () => {
    return new Promise((resolve, reject) => {
        watch.createMonitor(PATH.VIEW, function (monitor) {
            monitor.on("created", function (f, stat) {
                dirName = f.split(PATH.VIEW + '/')[1]

                if (!(/\./).test(f)) {
                    Promise.resolve()
                        .then(() => {
                            fs.writeFile(f + '/' + dirName + '.html', '',function () {
                                console.log(dirName+'.html')
                            })
                        })
                        .then(() => {
                            fs.writeFile(f + '/' + dirName + '.js', '',function () {
                                console.log(dirName+'.js')

                            })
                        })
                        .then(() => {
                            fs.writeFile(f + '/' + dirName + '.scss', '',function () {
                                console.log(dirName+'.scss')

                            })
                        })
                        .then(() => {
                            resolve()
                        })
                }
            })
            monitor.on("changed", function (f, curr, prev) {
                console.log('changed')
                return resolve()
            })
            monitor.on("removed", function (f, stat) {
                console.log('removed')
                return resolve()
            })
        })
    })
}

module.exports = watchFile

