/*
 * @Author: Jackie
 * @Date: 2021-10-25 14:01:56
 * @LastEditTime: 2022-05-10 15:38:35
 * @LastEditors: Jackie
 * @Description: file content
 * @version: 
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as filter from '@/filter/filter'; // 过滤器
import * as utils from '@/utils/util'; // 公共方法
import getRequest from '@/common/api';
import axios from 'axios';
import useEagerConnect from "@/common/hooks/SendMaaS";

// UI库
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.use(Antd);

// 设置基准值 10vw
import 'amfe-flexible';

// 引入剪贴板
import Clipboard from 'v-clipboard';
Vue.use(Clipboard);

// 多语言配置
import { i18n } from '@/common/lang/i18n.js'; // 多语言

// 公共样式
import '@/assets/css/index.scss';
import animate from 'animate.css';
Vue.use(animate);

// 公共方法
Vue.prototype.$chain = useEagerConnect;
Vue.prototype.$utils = utils;
Vue.prototype.$axios = getRequest;
Vue.prototype.$http = axios;
Vue.prototype.$bus = new Vue();

// 过滤器
Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key]);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
