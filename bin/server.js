const express = require('express')
const compress = require('compression')
const PATH = require('./../build/filePath')
const logger = require('./../build/tool/logger')

const setting = require('./../src/setting')
const PORT = setting.pro.port || '8080'

logger.info('加载配置文件...')

const app = express()
app.use(compress())
logger.info('配置静态文件...')
logger.success('成功配置静态文件...')

app.use(express.static(PATH.DIST))

app.listen(PORT, () => {
    logger.info('服务启动...')
    logger.success('成功启动服务器...')
    logger.success(`http://${PATH.LOCALHOST}:${PORT}`)
    logger.success(`http://${PATH.LAN}:${PORT}`)
})