/*
 * @Author: Jackie
 * @Date: 2021-07-19 15:42:25
 * @LastEditTime: 2022-05-07 14:13:33
 * @LastEditors: Jackie
 * @Description: file content
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
};