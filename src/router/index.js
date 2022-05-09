/*
 * @Author: Jackie
 * @Date: 2021-10-25 14:01:56
 * @LastEditTime: 2022-05-09 18:24:12
 * @LastEditors: Jackie
 * @Description: file content
 * @version: 
 */
import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import { $t } from '@/common/lang/i18n';
Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const routes = [
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
      hidden: true,//菜单是否隐藏
      keepAlive: false
    },
    // redirect: '/',
    // component: () => import("../views/Login/LoginChain.vue"),
    component: () => import("../views/Login/Login.vue"),
  },
  {
    path: "/",
    // name: "Index",
    meta: {
      title: "管理页",
      keys: 'index',
      hidden: false,
      leaf: false,//只有一个节点
      icon: "user", //菜单图标
      keepAlive: false,//是否需要缓存
      requireAuth: true,//需要登录
    },
    component: () => import("../views/Index.vue"),
    children: [
      {
        path: "/home",
        name: "Home",
        meta: { title: "Home", keys: 'index', hidden: false, keepAlive: false },
        component: () => import("../views/Home.vue"),
      },
      {
        path: "/text1",
        name: "Text1",
        meta: { title: "Text1", keys: 'index', hidden: false, keepAlive: false },
        component: () => import("../views/Text1.vue"),
      },
      {
        path: "",
        meta: { hidden: true, keepAlive: false },
        redirect: "/home",
      },
    ]
  },
  {
    path: "/",
    // name: "Index",
    meta: {
      title: "数据",
      keys: 'data',
      hidden: false,
      leaf: true,
      icon: "usergroup-add",
      keepAlive: false,
      requireAuth: true,
    },
    component: () => import("../views/Index.vue"),
    children: [
      {
        path: "/text2",
        name: "Text2",
        meta: { title: "Text2", keys: 'data', hidden: false, keepAlive: false },
        component: () => import("../views/Text2.vue"),
      },
      {
        path: "/text3",
        name: "Text3",
        meta: { title: "Text3", keys: 'data', hidden: false, keepAlive: false },
        component: () => import("../views/Text3.vue"),
      },
      {
        path: "/text4",
        name: "Text4",
        meta: { title: "Text4", keys: 'data', hidden: true, keepAlive: false },
        component: () => import("../views/Text4.vue"),
      },
      {
        path: "",
        meta: { hidden: true, keepAlive: false },
        redirect: "/home",
      },
    ]
  },
  {
    path: "/404",
    name: "NotFound",
    meta: { title: "404 Not Found", hidden: true, keepAlive: false },
    component: () => import("../views/404.vue"),
  },
  {
    path: "*",
    meta: { hidden: true, keepAlive: false },
    redirect: "/404",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  // 控制浏览器滚动位置
  scrollBehavior: () => ({ y: 0 }),
});

router.beforeEach((to, from, next) => {
  // 使用Vuex存储当前页面路由元信息
  // store.dispatch("routerMetaSync", JSON.parse(JSON.stringify(to.meta)));
  // 路由判断
  // if (to.matched.some((item) => {
  //   console.log(item);
  //   return item.meta.path;
  // })) {
  //   next("/login");
  // } else {
  //   next();  //这一行next必须写
  // }
  if (to.matched.some(record => record.meta?.requireAuth)) {
    const isLogin = store.state.isLogin;// || localStorage.getItem("token");
    console.log(isLogin);
    if (isLogin) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
