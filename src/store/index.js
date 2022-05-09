/*
 * @Author: Jackie
 * @Date: 2022-05-09 17:12:59
 * @LastEditTime: 2022-05-09 18:14:22
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue-admin-Background-template/src/store/index.js
 * @version: 
 */

import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

import state from './state';
import mutations from './mutation';
import actions from './action';
import getters from './getter';

// 实例化Vuex厂库
export default new Vuex.Store({
  state,//初始状态
  mutations,//自定义方法 同步操作
  actions,//调用mutations方法 异步
  getters,//计算属性
  plugins: [createPersistedState({ storage: window.sessionStorage })],//默认 {storage: window.localStorage}
  modules: {}
});