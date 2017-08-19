import './app.scss'
/******************************************************
 * import './app.scss'
 *
 * 在webpacl.config.base.js里的entry
 * entry: Object.assign(entries(PATH.VIEW), {
 *  'vendor': [
 *        path.join(PATH.POLYFILL),
 *       PATH.CSSIMPORT   ============》在这里注入了 全局样式
 *   ],
 * }),
********************************************************/