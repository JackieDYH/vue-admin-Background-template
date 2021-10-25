/*
 * @Author: Jackie
 * @Date: 2021-10-25 14:01:56
 * @LastEditTime: 2021-10-25 15:31:31
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

// UI库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 设置基准值 10vw
import 'amfe-flexible';

// 引入剪贴板
import Clipboard from 'v-clipboard';
Vue.use(Clipboard);

// 使用自定义插件
// import plugin from '@/utils/plugin';
// Vue.use(plugin);

// 多语言配置
import { i18n } from '@/common/lang/i18n.js'; // 多语言

// 公共样式
import '@/assets/css/index.scss';

// animate动画库
// import 'animate.css';

// 公共方法
Vue.prototype.$utils = utils;
Vue.prototype.$axios = getRequest;
Vue.prototype.$http = axios;
Vue.prototype.$bus = new Vue();

// 过滤器
Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key]);
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
