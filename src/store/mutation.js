/*
 * @Author: Jackie
 * @Date: 2022-05-09 17:12:59
 * @LastEditTime: 2022-05-09 18:13:32
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue-admin-Background-template/src/store/mutation.js
 * @version: 
 */
//修改状态的方法
export default {
    setrouterMeta(state, value) {
        state.routerMeta = value;
    },
    setlang(state, value) {
        state.lang = value;
    },
    setuserInfo(state, value) {
        state.userInfo = value;
    },
    setisLogin(state, value) {
        state.isLogin = value;
    },
};