/*
 * @Author: Jackie
 * @Date: 2021-07-23 11:14:28
 * @LastEditTime: 2022-01-25 16:18:07
 * @LastEditors: Jackie
 * @Description: file content
 * @version: 
 */
// 计算属性
export default {
    routerMeta: state => state.routerMeta,
    lang: state => state.lang,
    // isLang: state => state.isLang[state.lang],
    defaultServer: state => state.defaultServer,
    serverList: state => state.serverList,
}