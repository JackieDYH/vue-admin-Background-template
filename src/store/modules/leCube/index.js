/*
 * @Author: Jackie
 * @Date: 2021-07-30 10:14:15
 * @LastEditTime: 2021-07-30 11:05:39
 * @LastEditors: Jackie
 * @Description: file content
 * @version: 
 */
import state from './state';
import mutations from './mutation';
import actions from './action';
import getters from './getter';

export default {
  namespaced:true,//开启命名空间
  state,
  mutations,
  actions,
  getters,
}