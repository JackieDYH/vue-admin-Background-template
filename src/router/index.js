/*
 * @Author: Jackie
 * @Date: 2021-10-25 14:01:56
 * @LastEditTime: 2022-01-24 14:13:10
 * @LastEditors: Jackie
 * @Description: file content
 * @version: 
 */
import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import { $t } from '@/common/lang/i18n';
Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/login',
    name: 'Login',
    hidden: true, // 菜单是否隐藏 true隐藏
    iconCls: 'el-icon-message', // 图标样式class
    meta: { title: '登录', keepAlive: false, },
    component: () => import(`@/views/Login.vue`),
  },
  {
    path: "/",
    // name: "Index",
    hidden: false,
    leaf: true, // 只有一个节点
    iconCls: 'el-icon-s-home',
    meta: {
      title: "管理",
      path: "/",
      keepAlive: false,
    },
    component: () => import(`@/views/Index.vue`),
    children: [
      {
        path: '/home',
        name: "Home",
        hidden: false,
        iconCls: '',
        meta: {
          title: "主页",
          path: "/home",
          keepAlive: false,
        },
        component: () => import(`@/views/Home.vue`),
      },
      {
        path: '',
        hidden: true,
        meta: {
          title: "",
          path: "",
          keepAlive: false,
        },
        redirect: '/home',
      }
    ]
  },
  {
    path: "/",
    // name: "Index",
    hidden: false,
    leaf: false,
    iconCls: 'el-icon-s-tools',
    meta: {
      title: "数据",
      path: "/",
      keepAlive: false,
    },
    component: () => import(`@/views/Index.vue`),
    children: [
      {
        path: '/article',
        name: "Article",
        hidden: false,
        iconCls: '',
        meta: {
          title: "评价管理",
          path: "/article",
          keepAlive: false,
        },
        component: () => import(`@/views/Article.vue`),
      },
      {
        path: '/comment',
        name: "Comment",
        hidden: false,
        iconCls: '',
        meta: {
          title: "数据管理",
          path: "/comment",
          keepAlive: false,
        },
        component: () => import(`@/views/Comment.vue`),
      },
      // {
      //   path: '',
      //   hidden: true,
      //   meta: {
      //     title: "",
      //     path: "",
      //     keepAlive: false,
      //   },
      //   redirect: '/article',
      // }
    ],
  },
  {
    path: '*',
    hidden: true,
    redirect: '/',
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  // 控制浏览器滚动位置
  scrollBehavior: () => ({ y: 0 }),
  // scrollBehavior: (to, from, savedPosition) => {
  //   if (savedPosition) {
  //     // 记录浏览器前进后退按钮位置
  //     console.log(savedPosition);
  //     return savedPosition;
  //   } else {
  //     // const position = {};
  //     // position.selector = to.hash;
  //     // if(to.hash === '#nav'){
  //     //   position.offset = {y:120};
  //     // }
  //     // return position;
  //     return { x: 0, y: 100 };
  //   }
  // },
});

router.beforeEach((to, from, next) => {
  // 使用Vuex存储当前页面路由元信息
  // store.dispatch("routerMetaSync", JSON.parse(JSON.stringify(to.meta)));
  // 路由判断
  // if(to.matched.some((item)=>{
  //   console.log(item);
  //   return item.meta.path
  // })){
  //     next("/login")
  // }else{
  //   next()  //这一行next必须写
  // }
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router;
