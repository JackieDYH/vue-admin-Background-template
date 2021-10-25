/*
 * @Author: Jackie
 * @Date: 2021-07-20 18:19:57
 * @LastEditTime: 2021-10-25 15:01:46
 * @LastEditors: Jackie
 * @Description: file content
 * @version: 
 */
// 在http.js中引入axios
import axios from 'axios'; // 引入axios
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到
// import { Toast } from "vant";
import router from '@/router';
import store from "@/store";
import { $t } from "@/common/lang/i18n";

// 方式一
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/json'; //"application/x-www-form-urlencoded;charset=UTF-8"
axios.defaults.baseURL = process.env.VUE_APP_URL_API;
// axios.defaults.baseURL = 'http://192.168.10.26:7001';

// 方式二 创建axios实例
// let Service = axios.create({
//     baseURL = process.env.VUE_APP_URL_API,
//     timeout = 10000
// });

// 请求拦截器
// Service.interceptors.request.use
axios.interceptors.request.use(
    config => {
        let token = store.state.leCube.userInfo.token || localStorage.getItem("token");
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.error(error);
    });
// 响应拦截器
axios.interceptors.response.use(
    response => {
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
        // 否则的话抛出错误
        if (response.status === 200) {
            switch (response.data.errorCode) {
                // case 404:
                //     toastMessage({ message: response.data.msg, time: 3000 });
                //     setTimeout(() => {
                //         router.replace({
                //             path: '/',
                //             query: {
                //                 redirect: router.currentRoute.fullPath
                //             }
                //         });
                //     }, 2000);
                //     break;
                case 403:
                    // Toast({ message: $t("Common.common.invalid"), duration: 2000 });
                    break;
                // case 500:
                //     toastMessage({ message: response.data.msg, time: 3000 });
                //     break;
                // case 503:
                //     // 维护
                //     router.replace({
                //         path: '/maintenancePage',
                //         query: {}
                //     });
                //     break;
                default:
                    break;
            }
            return Promise.resolve(response.data);
        } else {
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是2开头的的情况
    // 这里可以跟你们的后台开发人员协商好统一的错误状态码    
    // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
    // 下面列举几个常见的操作，其他需求可自行扩展
    error => {
        return Promise.reject(error);
    });
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
    // if (!params.token) {
    //     params.token = store.state.leCube.userInfo.token || localStorage.getItem("token");
    // }
    params.language = localStorage.getItem("language") ? localStorage.getItem("language") : 'cn';
    return new Promise((resolve, reject) => {
        axios.get(url, { params })
            .then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })
    });
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
    // if (!params.token) {
    //     params.token = store.state.leCube.userInfo.token || localStorage.getItem("token");
    // }
    params.language = localStorage.getItem("language") ? localStorage.getItem("language") : 'cn';
    return new Promise((resolve, reject) => {
        // debugger
        // QS.stringify  application/x-www-form-urlencoded
        axios.post(url, params)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
    });
}