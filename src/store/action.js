/*
 * @Author: Jackie
 * @Date: 2022-05-09 17:12:59
 * @LastEditTime: 2022-05-09 18:14:05
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue-admin-Background-template/src/store/action.js
 * @version: 
 */
//异步操作mutation的方法
export default {
    routerMetaSync({ commit }, value) {
        commit("setrouterMeta", value);
    },
    // 设置语言
    langSync({ commit }, value) {
        commit("setlang", value);
    },
    userInfoSync({ commit }, value) {
        commit("setuserInfo", value);
    },
    setisLoginSync({ commit }, value) {
        commit("setisLogin", value);
    },
};