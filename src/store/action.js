/*
 * @Author: Jackie
 * @Date: 2021-07-19 15:42:25
 * @LastEditTime: 2022-01-25 16:18:17
 * @LastEditors: Jackie
 * @Description: file content
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
    defaultServerSync({ commit }, value) {
        commit("setdefaultServer", value);
    },
}