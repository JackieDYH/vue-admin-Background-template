/*
 * @Author: Jackie
 * @Date: 2021-07-19 11:05:42
 * @LastEditTime: 2021-07-30 11:05:28
 * @LastEditors: Jackie
 * @Description: file content
 * @version: 
 */
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

import state from './state';
import mutations from './mutation';
import actions from './action';
import getters from './getter';
// 引入用户模块数据
import leCube from './modules/leCube';

// 实例化Vuex厂库
export default new Vuex.Store({
  state,//初始状态
  mutations,//自定义方法 同步操作
  actions,//调用mutations方法 异步
  getters,//计算属性
  plugins: [createPersistedState({ storage: window.sessionStorage })],//默认 {storage: window.localStorage}
  modules: {//模块
    leCube
  }
})