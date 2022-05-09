/*
 * @Author: Jackie
 * @Date: 2022-05-09 17:12:59
 * @LastEditTime: 2022-05-09 18:14:13
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue-admin-Background-template/src/store/getter.js
 * @version: 
 */
// 计算属性
export default {
    routerMeta: state => state.routerMeta,
    lang: state => state.lang,
    userInfo: state => state.userInfo,
    isLogin: state => state.isLogin,
};