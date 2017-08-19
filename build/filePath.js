const path = require("path")
const ip = require('ip')

const LOCALHOST = '127.0.0.1'
const LAN = ip.address()

const ROOT = path.resolve(__dirname, './../')
const SRC = path.join(ROOT, 'src')
const JAVASCRIPT = path.resolve(SRC, 'javascript/')
const HTML = path.resolve(SRC, 'html/')
const LAYOUT = path.resolve(SRC, 'layout')
const STYLE = path.resolve(SRC, 'style')
const DIST = path.join(ROOT, "dist")
const STATIC = path.join(ROOT, "static")
const JS = path.join(DIST, "js")
const VIEW = path.resolve(SRC, 'view')

const PUBLICPATH = '/'
const FAVICON = path.resolve(ROOT, 'static/favicon.ico')
const POLYFILL = path.resolve(JAVASCRIPT, 'polyfill.js')
const CSSIMPORT = path.resolve(STYLE, 'style')


module.exports = {
    ROOT,
    SRC,
    JAVASCRIPT,
    HTML,
    FAVICON,
    DIST,
    JS,
    LAYOUT,
    STYLE,
    STATIC,
    PUBLICPATH,
    VIEW,
    CSSIMPORT,
    POLYFILL,
    LOCALHOST,
    LAN
}