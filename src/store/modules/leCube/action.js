/*
 * @Author: Jackie
 * @Date: 2021-07-30 10:14:15
 * @LastEditTime: 2021-10-25 17:03:26
 * @LastEditors: Jackie
 * @Description: file content
 * @version: 
 */
//异步操作mutation的方法
import axios from '@/common/api';
export default {
    isLoginSync({ commit }, value) {
        commit("setisLogin", value);
    },
    userInfoSync({ commit }, value) {
        commit("setuserInfo", value);
    },
}