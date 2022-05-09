/*
 * @Author: Jackie
 * @Date: 2021-07-20 18:19:57
 * @LastEditTime: 2022-05-07 14:39:05
 * @LastEditors: Jackie
 * @Description: file content
 * @version: 
 */
// 在http.js中引入axios
import axios from 'axios'; // 引入axios

axios.defaults.timeout = 10000;
//"application/json;charset=UTF-8" "application/x-www-form-urlencoded;charset=UTF-8"
axios.defaults.headers.post['Content-Type'] = "application/json;charset=UTF-8";
// axios.defaults.baseURL = 'http://47.101.216.210:18100';

// 请求拦截器
axios.interceptors.request.use(
    config => {
        // 设置token
        let token = localStorage.getItem("token");
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
        // 如果返回的状态码为201，说明接口请求成功，可以正常拿到数据
        // 否则的话抛出错误
        if (response.status === 201) {
            switch (response.data.errorCode) {
                case 403:
                    console.log('没有权限');
                    break;
                default:
                    break;
            }
            return Promise.resolve(response.data);
        } else {
            return Promise.reject(response.data);
        }
    },
    error => {
        return Promise.reject(error);
    });
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, { params })
            .then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
    });
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
    });
}