/*
 * @Author: Jackie
 * @Date: 2021-07-19 15:42:25
 * @LastEditTime: 2021-10-25 17:03:43
 * @LastEditors: Jackie
 * @Description: file content
 * @version: 
 */
//修改状态的方法
export default {
    setisLogin(state, value) {
        state.isLogin = value;
    },
    setuserInfo(state, value) {
        state.userInfo = value;
    },
}