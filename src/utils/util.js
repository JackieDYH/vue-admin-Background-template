/*
 * @Author: Jackie
 * @Date: 2022-01-19 15:08:03
 * @LastEditTime: 2022-01-21 17:05:11
 * @LastEditors: Jackie
 * @Description: 工具方法 - 汇总
 * @version: 
 */

// 工具函数
// import web3 from 'web3';
import dayjs from 'dayjs'

// let ArrayBufferToHex = (ArrayBuffer) => {
//     // let result1 = Array.prototype.map.call(new Uint8Array(ArrayBuffer), x => ('00' + x.toString(16)).slice(-2)).join('');
//     let result = web3.utils.bytesToHex(new Uint8Array(ArrayBuffer));
//     return result;
// }

// =============================时间处理=============================

/**
 * 时间过去多久时间戳版
 * post_modified = '2021-12-28 12:57:04'
 * @param {*} post_modified 
 * @returns 
 */
const handlePublishTimeDesc = (post_modified) => {
    // 拿到当前时间戳和发布时的时间戳，然后得出时间戳差
    var curTime = new Date();
    var postTime = new Date(post_modified);
    var timeDiff = curTime.getTime() - postTime.getTime();

    // 单位换算
    var min = 60 * 1000;
    var hour = min * 60;
    var day = hour * 24;
    var week = day * 7;

    // 计算发布时间距离当前时间的周、天、时、分
    var exceedWeek = Math.floor(timeDiff / week);
    var exceedDay = Math.floor(timeDiff / day);
    var exceedHour = Math.floor(timeDiff / hour);
    var exceedMin = Math.floor(timeDiff / min);

    // 最后判断时间差到底是属于哪个区间，然后return
    if (exceedWeek > 0) {
        return post_modified;
    } else {
        if (exceedDay < 7 && exceedDay > 0) {
            return exceedDay + '天前';
        } else {
            if (exceedHour < 24 && exceedHour > 0) {
                return exceedHour + '小时前';
            } else {
                if (exceedMin < 10) {
                    return '刚刚'
                } else {
                    return exceedMin + '分种前';
                }
            }
        }
    }
}

/**
 * 时间过去多久时间戳版
 * dayjs库处理时间
 * @param {*} postTime 
 * @returns 
 */
const publishTimeDesc = (postTime) => {
    postTime = String(postTime).length >= 10 ? postTime * 1000 : postTime
    var curTime = new Date().getTime()
    var timeDiff = curTime - postTime
    // 单位换算
    var min = 60 * 1000
    var hour = min * 60
    var day = hour * 24
    var week = day * 7

    // 计算发布时间距离当前时间的周、天、时、分
    var exceedWeek = Math.floor(timeDiff / week)
    var exceedDay = Math.floor(timeDiff / day)
    var exceedHour = Math.floor(timeDiff / hour)
    var exceedMin = Math.floor(timeDiff / min)

    // 最后判断时间差到底是属于哪个区间，然后return
    if (exceedWeek > 0) {
        return dayjs(postTime).format("YYYY-MM-DD HH:mm:ss")
    } else {
        if (exceedDay < 7 && exceedDay > 0) {
            return exceedDay + "天前"
        } else {
            if (exceedHour < 24 && exceedHour > 0) {
                return exceedHour + "小时前"
            } else {
                if (exceedMin < 10) {
                    return "刚刚"
                } else {
                    return exceedMin + "分种前"
                }
            }
        }
    }
}

/**
 * 计算当前时间距离将来时间戳多少天
 * rangHadelDay('1742578671')
 * @param {*} value 
 * @returns 
 */
let rangHadelDay = value => {
    if (value == 0 || value == "") {
        return "-";
    }
    value = Number(value);
    if (isNaN(value)) {
        return "";
    }
    var startTime = new Date().getTime(); //开始时间
    var endTime = value.length > 10 ? value : value * 1000; //结束时间
    var date3 = endTime - startTime //时间差的毫秒数 
    var days = Math.floor(date3 / (24 * 3600 * 1000));
    return days;
}

/**
 * 格式化时间
 * formatTime('1742578671','YYYY-MM-DD')
 * @param {*} value 
 * @param {*} format 
 * @returns 
 */
let formatTime = (value, format) => {
    if (value == 0 || value == "" || !value) {
        return "-";
    }
    value = Number(value);
    if (isNaN(value)) {
        return "";
    }
    let _format = function (number) {
        return (number < 10 ? ('0' + number) : number);
    };
    var value1 = value.length > 10 ? value : value * 1000;
    var weekday_list = ['日', '一', '二', '三', '四', '五', '六'];
    var d = new Date(value1);
    var year = _format(d.getFullYear());
    var month = _format(d.getMonth() + 1);
    var day = _format(d.getDate());
    var hour = _format(d.getHours());
    var minutes = _format(d.getMinutes());
    var seconds = _format(d.getSeconds());
    var weekday = d.getDay();
    if (format == "YYYY-MM-DD") {
        return year + '-' + month + '-' + day;
    } else if (format == "MM-DD") {
        return month + '-' + day;
    } else if (format == "YYYY-MM-DD HH:MM:SS") {
        return year + '-' + month + '-' + day + '  ' + hour + ':' + minutes + ':' + seconds;
    } else if (format == "HH:MM:SS") {
        return hour + ':' + minutes + ':' + seconds;
    } else if (format == "HH:MM") {
        return hour + ':' + minutes;
    } else if (format == "YYYY/MM/DD weekday") {
        return year + '/' + month + '/' + day + '  ' + '星期' + weekday_list[weekday];
    } else if (format == "YYYY-MM-DD HH:MM") {
        return year + '-' + month + '-' + day + '  ' + hour + ':' + minutes;
    } else if (format == "YYYY-MM") {
        return year + '-' + month;
    } else if (format == "yyyy-mm-dd hh:mm") {
        return year + '年' + month + '月' + day + '日 ' + hour + ':' + minutes;
    } else if (format == "mm-dd hh:mm") {
        return month + '月' + day + '日 ' + hour + ':' + minutes;
    } else {
        return year + '-' + month + '-' + day;
    }
}

/**
 * 倒计时事件 秒
 * @param {*} value 
 * @param {*} format 
 * @returns 
 */
const getcountDown = (value, format) => {
    let nowTime = (new Date().getTime()) / 1000; // 当前时间 秒
    value = Number(value);
    if (value == 0 || value == "" || !value || value <= nowTime) {
        return "-";
    }
    if (isNaN(value)) {
        return "";
    }
    value--;
    let timediff = Math.round(value - nowTime); //获取时间差
    let day = parseInt(timediff / 60 / 60 / 24);
    let hr = parseInt(timediff / 60 / 60 % 24);
    let min = parseInt(timediff / 60 % 60);
    let sec = parseInt(timediff % 60);

    let _format = function (number) {
        return (number < 10 ? ('0' + number) : number);
    };

    day = _format(day);
    hr = _format(hr);
    min = _format(min);
    sec = _format(sec);
    // 返回值
    switch (format) {
        case "dayHH:MM:SS":
            return `${day}day ${hr}:${min}:${sec}`;
            break;
        case "day:HH:MM:SS":
            return `${day}:${hr}:${min}:${sec}`;
            break;
        default:
            return { day, hr, min, sec };
            break;
    }
}

// =============================时间处理end=============================

/**
 * 设置小数位
 * @param {*} value 
 * @param {*} type 
 * @returns 
 */
let formatNumber = (value, type) => {
    //type 1，左半部分价格2，右半部分价格
    let num = type ? type : 5;
    if (isNaN(value)) {
        return 0;
    }
    return Number(value).toFixed(num);
}

/**
 * 格式化商品价格(分)
 * @param {*} value 
 * @param {*} type 
 * @returns 
 */
let formatPrice = (value, type) => {
    //type 1，左半部分价格2，右半部分价格
    if (isNaN(value)) {
        return 0;
    }
    const f = (Math.round(value * 100) / 100 / 100).toFixed(2);
    const s = f.toString().split(".");
    if (type == 1) {
        return s[0].toString();
    } else if (type == 2) {
        return s[1].toString();
    } else if (type == 3) {
        let price = s.join(".");
        if (Number(price) > 10000) {
            return parseInt(price / 10000) + 'w'
        } else {
            return s.join(".");
        }

    } else {
        return s.join(".");
    }
}

/**
 * 设置大数展示
 * 10000 => 10k
 * numberFormatter(256982222,6) // 256.982222M
 * @param {*} num 
 * @param {*} digits 
 * @returns 
 */
let numberFormatter = (num, digits) => {
    const si = [
        { value: 1E18, symbol: 'E' },
        { value: 1E15, symbol: 'P' },
        { value: 1E12, symbol: 'T' },
        { value: 1E9, symbol: 'G' },
        { value: 1E6, symbol: 'M' },
        { value: 1E3, symbol: 'k' }
    ]
    for (let i = 0; i < si.length; i++) {
        if (num >= si[i].value) {
            return (num / si[i].value).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
        }
    }
    return num.toString()
}

/**
 * 浏览量
 * @param {*} num 
 * @returns 
 */
let computerLook = (num) => {
    if (!isNaN(num)) {
        num = Number(num);
        if (num >= 1000 && num < 10000) {
            num = Number((num / 1000).toString().match(/^\d+(?:\.\d{0,2})?/));
            return num + 'k';
        } else if (num >= 10000) {
            num = Number((num / 10000).toString().match(/^\d+(?:\.\d{0,2})?/));
            return num + 'w';
        } else {
            return num;
        }
    } else {
        return 0;
    }
}

/**
 * 中间省略号
 * @param {*} text 
 * @param {*} n1 
 * @param {*} n2 
 * @returns 
 */
let ellipsAddress = (text, n1 = 5, n2 = 11) => {
    if (text) {
        if (text.length > n1) {
            n1 = n1 > 1 ? n1 : 1;
            return text.substring(0, n1) + '...' + text.substring(text.length - n2, text.length);
        } else {
            return text.substring(0, 5) + '...' + text.substring(text.length - 11, text.length);
        }
    } else {
        return text;
    }
}

/**
 * 星号
 * @param {*} text 
 * @param {*} num 
 * @returns 
 */
let ellipsMoblie = (text, num) => {
    if (text) {
        if (text.length > num) {
            num = num > 1 ? num : 1;
            return text.substring(0, num) + '****' + text.substring(text.length - num, text.length);
        } else {
            return text.substring(0, 3) + '****' + text.substring(text.length - 3, text.length);
        }
    } else {
        return text;
    }
}

/**
 * 截取标题加省略号
 * @param {*} text 
 * @param {*} num 
 * @returns 
 */
let ellipsText = (text, num) => {
    if (text) {
        if (text.length > num) {
            return text.substring(0, num) + '...';
        } else {
            return text;
        }
    } else {
        return text;
    }
}

/**
 * 添加千分位
 * @param {*} num 
 * @returns 
 */
let numFormatMil = (num) => {
    // 先提取整数部分
    var res = num.toString().replace(/\d+/, function (n) {
        return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
            return $1 + ",";
        });
    })
    return res;
}

/**
 * 千分位 10,000
 * @param {*} s 
 * @param {*} type 
 * @returns 
 */
let thousandth = (s, type = 0) => {
    // if (!s) return '0';
    // return (s+'').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
    // return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
    if (/[^0-9\.]/.test(s)) return "0";
    if (s == null || s == "") return "0";
    s = s.toString().replace(/^(\d*)$/, "$1.");
    s = (s + "00").replace(/(\d*\.\d\d)\d*/, "$1");
    s = s.replace(".", ",");
    var re = /(\d)(\d{3},)/;
    while (re.test(s)) s = s.replace(re, "$1,$2");
    s = s.replace(/,(\d\d)$/, ".$1");
    if (type == 0) {
        // 不带小数位(默认是有小数位)
        var a = s.split(".");
        if (a[1] == "00") {
            s = a[0];
        }
    }
    return s;
}

/**
 * 首字母变大写
 * @param {*} value 
 * @returns 
 */
let capitalize = value => {
    if (!value) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
}

/**
 * 解析对象 { k: 1, i: 3 } k=1&i=3
 * @param {*} obj 
 * @returns 
 */
const queryStr = (obj) => {
    obj = obj || {};
    let _result = '';
    for (let key in obj) {
        let value = obj[key];
        if (typeof value !== 'undefined' && value !== null && value !== '') {
            // 有时候数值型0会转成false
            if (_result) {
                _result += '&';
            }
            _result += `${key}=${value}`;
        }
    }
    return _result;
}

/**
 * 是否座机号码
 * @param {*} s 
 * @returns 
 */
const isFixedphone = (s) => {
    return /^\d{3}-\d{8}|\d{4}-\d{7}$/g.test(s);
}

/**
 * 邮箱
 * @param {*} s 
 * @returns 
 */
const isEmail = (s) => {
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s);
}

/**
 * 邮编
 * @param {*} s 
 * @returns 
 */
const isPostcode = (s) => {
    return /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/g.test(s);
}

/**
 * URL地址
 * @param {*} s 
 * @returns 
 */
const isURL = (s) => {
    return /^http[s]?:\/\/.*/.test(s);
}

/**
 * 身份证
 * @param {*} s 
 * @returns 
 */
const isIdCard = (s) => {
    return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(s);
}

/**
 * 手机号码
 * @param {*} s 
 * @returns 
 */
const isPhone = (s) => {
    return /^1[0-9]{10}$/.test(s);
}

/**
 * 隐藏手机号中间四位
 * @param {*} phone 
 * @returns 
 */
const hidePhone = (phone) => {
    return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
}

/**
 * 函数节流
 * @param {*} fn 
 * @param {*} t 
 * @returns 
 */
const throttle = (fn, t) => {
    let last;
    let timer;
    let interval = t || 500;
    return function () {
        let args = arguments;
        let now = +new Date();
        if (last && now - last < interval) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                last = now;
                fn.apply(this, args);
            }, interval)
        } else {
            last = now;
            fn.apply(this, args);
        }
    }
}

/**
 * 函数防抖
 * @param {*} func 
 * @param {*} waits 
 * @param {*} immediate 
 * @returns 
 */
const debounce = (func, waits, immediate) => {
    let wait = waits || 500;
    let timeout;
    return function () {
        let context = this;
        let args = arguments;
        if (timeout) clearTimeout(timeout)
        if (immediate) {
            var callNow = !timeout;
            timeout = setTimeout(() => {
                timeout = null;
            }, wait)
            if (callNow) func.apply(context, args)
        } else {
            timeout = setTimeout(function () {
                func.apply(context, args)
            }, wait)
        }
    }
}

/**
 * 获取视口宽高尺寸
 * @returns 
 */
const getViewportOffset = () => {
    if (window.innerWidth) {
        return {
            w: window.innerWidth,
            h: window.innerHeight
        }
    } else {
        // ie8及其以下
        if (document.compatMode === 'BackCompat') {
            // 怪异模式
            return {
                w: document.body.clientWidth,
                h: document.body.clientHeight
            }
        } else {
            // 标准模式
            return {
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight
            }
        }
    }
}

/**
 * 统计数组中各个元素出现的次数
 * @param {*} arr 
 * @returns 
 */
const staArrNum = (arr) => {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let m = arr[i];
        if (obj.hasOwnProperty(m)) {
            obj[m] += 1;
        } else {
            obj[m] = 1;
        }
    }
    return obj;
}

/**
 * 指定范围内随机数
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
const randomNumber = (min, max) => {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num
}

/**
 * 判断空值
 * @param {*} keys 
 * @returns 
 */
const isEmpty = (keys) => {
    if (typeof keys === "string") {
        keys = keys.replace(/\"|&nbsp;|\\/g, '').replace(/(^\s*)|(\s*$)/g, "");
        if (keys == "" || keys == null || keys == "null" || keys === "undefined") {
            return true;
        } else {
            return false;
        }
    } else if (typeof keys === "undefined") {  // 未定义
        return true;
    } else if (typeof keys === "number") {
        return false;
    } else if (typeof keys === "boolean") {
        return false;
    } else if (typeof keys == "object") {
        if (JSON.stringify(keys) == "{}") {
            return true;
        } else if (keys == null) { // null
            return true;
        } else {
            return false;
        }
    }

    if (keys instanceof Array && keys.length == 0) {// 数组
        return true;
    }
}

const getUrlParams = () => {
    // location的search属性获取到 ?a=1&b=2  字符串
    let searchStr = '?channel_id=305'
    let qs = searchStr ? searchStr.substring(1) : ''
    // 要是没有url参数，temp为空数组
    let temp = qs.length ? qs.split('&') : []
    let len = temp.length
    let paraObj = {}
    let item
    for (let i = 0; i < len; i++) {
        item = temp[i].split('=')
        // 对两项进行解码再保存在对象中
        paraObj[decodeURIComponent(item[0])] = decodeURIComponent(item[1])
    }
    return paraObj
}

const formatDecimal = (num, decimal) => {
    if (isNaN(num)) {
        return 0
    } else {
        num = num.toString()
        let index = num.indexOf('.')
        if (index !== -1) {
            num = num.substring(0, decimal + index + 1)
        } else {
            num = num.substring(0)
        }
        return parseFloat(num).toFixed(decimal)
    }
}

const deepCopy = (obj, parent = null) => {
    // 创建一个新对象
    let result = {};
    let keys = Object.keys(obj),
        key = null,
        temp = null,
        _parent = parent;
    // 该字段有父级则需要追溯该字段的父级
    while (_parent) {
        // 如果该字段引用了它的父级则为循环引用
        if (_parent.originalParent === obj) {
            // 循环引用直接返回同级的新对象
            return _parent.currentParent;
        }
        _parent = _parent.parent;
    }
    for (let i = 0; i < keys.length; i++) {
        key = keys[i];
        temp = obj[key];
        // 如果字段的值也是一个对象
        if (temp && typeof temp === 'object') {
            // 递归执行深拷贝 将同级的待拷贝对象与新对象传递给 parent 方便追溯循环引用
            result[key] = deepCopy(temp, {
                originalParent: obj,
                currentParent: result,
                parent: parent
            });
        } else {
            result[key] = temp;
        }
    }
    return result;
}

/**
 * 
 * @param {*} str 
 * @returns 
 */
let escape2Html = (str) => {
    if (!str) {
        return "";
    }
    var arrEntities = {
        lt: "<",
        gt: ">",
        nbsp: " ",
        "↵": " ",
        amp: "&",
        quot: '"'
    };
    return str.replace(/&(lt|gt|nbsp|amp|quot);/gi, function (all, t) {
        return arrEntities[t];
    });
}

/**
 * 
 * @param {*} param 
 * @param {*} key 
 * @param {*} encode 
 * @returns 
 */
let urlEncode = function (param, key, encode) {
    if (param == null) return '';
    var paramStr = '';
    var t = typeof (param);
    if (t == 'string' || t == 'number' || t == 'boolean') {
        paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
    } else {
        for (var i in param) {
            var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
            paramStr += urlEncode(param[i], k, encode);
        }
    }
    return paramStr;
};

let deviceMethod = {
    /**
     * 是否是安卓设备
     * @returns {boolean}
     */
    verifyAndroid: function () {
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        if (isAndroid) {
            return true;
        } else {
            return false;
        }
    },
    /**
     *是否是ios设备
     * @returns {boolean}
     */
    verifyIos: function () {
        var u = navigator.userAgent;
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        if (isiOS) {
            return true;
        } else {
            return false;
        }
    },
    /**
     * 是否是微信内部浏览器
     * @returns {boolean}
     */
    isWeiXin: function () {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger" || ua.match(/WeiBo/i) == "weibo") {
            return true;
        } else if (ua.indexOf('mobile mqqbrowser') > -1) {
            return true;
        } else if (ua.indexOf('iphone') > -1 || ua.indexOf('mac') > -1) {
            if (ua.indexOf('qq') > -1) {
                return true;
            }
        }
        return false;
    },
    isMobile: function () {
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            return true;
        } else {
            return false;
        }
    }
}


export {
    // ArrayBufferToHex,
    handlePublishTimeDesc,
    publishTimeDesc,
    rangHadelDay,
    formatTime,
    getcountDown,
    formatNumber,
    formatPrice,
    numberFormatter,
    computerLook,
    ellipsAddress,
    ellipsMoblie,
    ellipsText,
    numFormatMil,
    thousandth,
    capitalize,
    queryStr,
    isFixedphone,
    isEmail,
    isPostcode,
    isURL,
    isIdCard,
    isPhone,
    hidePhone,
    throttle,
    debounce,
    getViewportOffset,
    staArrNum,
    randomNumber,
    isEmpty,
    getUrlParams,
    formatDecimal,
    deepCopy,
    escape2Html,
    urlEncode,
    deviceMethod
}