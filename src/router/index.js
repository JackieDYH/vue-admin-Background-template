/*
 * @Author: Jackie
 * @Date: 2021-10-25 14:01:56
 * @LastEditTime: 2022-05-10 18:03:08
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
    component: () => import("../views/Login/LoginChain.vue"),
	// component: () => import("../views/Login/LoginPhone.vue"),
    // component: () => import("../views/Login/Login.vue"),
  },
  {
    path: "/",
    // name: "Index",
    meta: {
      title: "管理页",
      keys: 'index',
      hidden: false,
      leaf: true,//只有一个节点
      icon: "user", //菜单图标
      keepAlive: false,//是否需要缓存
      requireAuth: true,//需要登录
    },
    component: () => import("../views/Index.vue"),
    children: [
      {
        path: "/home",
        name: "Home",
        meta: { title: "用户管理", keys: 'index', hidden: false, keepAlive: false },
        component: () => import("../views/Home.vue"),
      },
      // {
      //   path: "/subject",
      //   name: "Subject",
      //   meta: { title: "题目管理", keys: 'index', hidden: false, keepAlive: false },
      //   component: () => import("../views/Subject.vue"),
      // },
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
      title: "管理页",
      keys: 'index2',
      hidden: false,
      leaf: true,
      icon: "user",
      keepAlive: false,
      requireAuth: true,
    },
    component: () => import("../views/Index.vue"),
    children: [
      {
        path: "/subject",
        name: "Subject",
        meta: { title: "题目管理", keys: 'index2', hidden: false, keepAlive: false },
        component: () => import("../views/Subject.vue"),
      },
    ]
  },
  {
    path: "/",
    // name: "Index",
    meta: {
      title: "勋章",
      keys: 'index3',
      hidden: false,
      leaf: false,
      icon: "usergroup-add",
      keepAlive: false,
      requireAuth: true,
    },
    component: () => import("../views/Index.vue"),
    children: [
      {
        path: "/medal",
        name: "Medal",
        meta: { title: "勋章管理", keys: 'index3', hidden: false, keepAlive: false },
        component: () => import("../views/Medal.vue"),
      },
      {
        path: "/text",
        name: "Text",
        meta: { title: "勋章管理", keys: 'index3', hidden: false, keepAlive: false },
        component: () => import("../views/Text.vue"),
      },
      // {
      //   path: "",
      //   meta: { hidden: true, keepAlive: false },
      //   redirect: "/home",
      // },
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
