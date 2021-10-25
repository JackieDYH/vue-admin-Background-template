/*
 * @Author: Jackie
 * @Date: 2021-10-21 15:04:21
 * @LastEditTime: 2021-10-21 16:26:12
 * @LastEditors: Jackie
 * @Description: file content
 * @version: 本地存储 Cookie localStorage sessionStorage
 */

import Cookies from "js-cookie";

/**==========================localStorage 存储===============================*/

// 数据存储到本地缓存
const localSet = (key, value, day) => {
    let d = new Date();
    let time = 0;
    day = (typeof (day) === 'undefined' || !day) ? 1 : day;// 时间,默认存储1天
    time = d.setHours(d.getHours() + (24 * day));// 毫秒
    window.localStorage.setItem(key, JSON.stringify({ value, time }));
}

// 获取本地缓存数据
const localGet = (key) => {
    let obj = window.localStorage.getItem(key);
    if (obj && obj !== undefined && obj !== null) {
        let data = JSON.parse(obj);
        if (new Date().getTime() > data.time) { // 过期
            localStorage.removeItem(key);
            return null;
        } else {
            return data.value;
        }
    }
    return '';
}

// 清除本地缓存数据
const localRemove = (key) => {
    if (key) {
        // 删除键为name的缓存
        window.localStorage.removeItem(key);
    } else {
        // 清空全部
        window.localStorage.clear();
    }
}

// 检查本地缓存是否有值
const localSeek = (name) => {
    if (!name) return;
    return window.localStorage.hasOwnProperty(name);
}

/*
*  localStorage 存储
*/

const local = {
    // 数据存储到本地缓存
    set: (key, value, day) => {
        let d = new Date();
        let time = 0;
        day = (typeof (day) === 'undefined' || !day) ? 1 : day;// 时间,默认存储1天
        time = d.setHours(d.getHours() + (24 * day));// 毫秒
        window.localStorage.setItem(key, JSON.stringify({ value, time }));
    },

    // 获取本地缓存数据
    get: (key) => {
        let obj = window.localStorage.getItem(key);
        if (obj && obj !== undefined && obj !== null) {
            let data = JSON.parse(obj);
            if (new Date().getTime() > data.time) { // 过期
                localStorage.removeItem(key);
                return null;
            } else {
                return data.value;
            }
        }
        return '';
    },

    // 清除本地缓存数据
    remove: (key) => {
        if (key) {
            // 删除键为name的缓存
            window.localStorage.removeItem(key);
        } else {
            // 清空全部
            window.localStorage.clear();
        }
    },

    seek: (name) => {
        if (!name) return;
        return window.localStorage.hasOwnProperty(name);
    },
};


/**==========================sessionStorage 存储===============================*/
// 数据存储到本地缓存
const sessionSet = (key, value, day) => {
    let d = new Date();
    let time = 0;
    day = (typeof (day) === 'undefined' || !day) ? 1 : day;// 时间,默认存储1天
    time = d.setHours(d.getHours() + (24 * day));// 毫秒
    window.sessionStorage.setItem(key, JSON.stringify({ value, time }))
}

// 获取本地缓存数据
const sessionGet = (key) => {
    let obj = window.sessionStorage.getItem(key);
    if (obj && obj !== undefined && obj !== null) {
        let data = JSON.parse(obj);
        if (new Date().getTime() > data.time) { // 过期
            sessionStorage.removeItem(key);
            return null;
        } else {
            return data.value;
        }
    }
    return '';
}

// 清除本地缓存数据
const sessionRemove = (key) => {
    if (key) {
        // 删除键为name的缓存
        window.sessionStorage.removeItem(key);
    } else {
        // 清空全部
        window.sessionStorage.clear();
    }
}

// 检查本地缓存是否有值
const sessionSeek = (name) => {
    if (!name) return;
    return window.sessionStorage.hasOwnProperty(name);
}

/*
*  sessionStorage 存储
*/

const session = {
    // 数据存储到本地缓存
    set: (key, value, day) => {
        let d = new Date();
        let time = 0;
        day = (typeof (day) === 'undefined' || !day) ? 1 : day;// 时间,默认存储1天
        time = d.setHours(d.getHours() + (24 * day));// 毫秒
        window.sessionStorage.setItem(key, JSON.stringify({ value, time }));
    },

    // 获取本地缓存数据
    get: (key) => {
        let obj = window.sessionStorage.getItem(key);
        if (obj && obj !== undefined && obj !== null) {
            let data = JSON.parse(obj);
            if (new Date().getTime() > data.time) { // 过期
                sessionStorage.removeItem(key);
                return null;
            } else {
                return data.value;
            }
        }
        return '';
    },

    // 清除本地缓存数据
    remove: (key) => {
        if (key) {
            // 删除键为name的缓存
            window.sessionStorage.removeItem(key);
        } else {
            // 清空全部
            window.sessionStorage.clear();
        }
    },

    seek: (name) => {
        if (!name) return;
        return window.sessionStorage.hasOwnProperty(name);
    },
};

/**==========================cookie 存储===============================*/

// 插件方式
const cookie = {
    set: (name, value, expires, path) => {
        let exp = {};
        if (expires && !path) {
            exp = { expires };//有效期
        };
        if (expires && path) {
            exp = { expires, path };//地址
        }
        Cookies.set(name, value, exp);
    },
    get: (name) => {
        if (name) {
            // 取指定
            return Cookies.get(name);
        } else {
            // 取全部
            return Cookies.get();
        }
    },
    remove: (name, path) => {
        if (path) {
            Cookies.remove(name, { path });
        } else {
            Cookies.remove(name);
        }
    },
}

// 原生
const cookie2 = {
    set: (name, value, day) => {
        let d = new Date();
        d.setDate(d.getDate() + (day || 30));
        document.cookie = name + '=' + value + ';expires=' + d.toGMTString() + "; path=/;";
    },
    get: (name) => {
        let str = document.cookie;
        let arr = str.split('; ');
        for (let i = 0; i < arr.length; i++) {
            let newArr = arr[i].split('=');
            if (newArr[0] === name) {
                return newArr[1];
            }
        }
    },
    remove: (name) => {
        this.set(name, '', -1);
    },
};

// import localStorage from "@/utils/localStorage";
// export default {
//     local,
//     session,
//     cookie2,
// }

// import { local, session, cookie, cookie2 } from "@/utils/localStorage";
export {
    local,
    session,
    cookie,
    cookie2,
}