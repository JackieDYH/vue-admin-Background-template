// 工具函数
// import web3 from 'web3';

/**
 * 格式化时间
 */
let timeHadelSeconds = (format, value) => {
    var value1 = value.length > 10 ? value * 1000 : value;
    var d = new Date(value1);
    var year = d.getFullYear() < 10 ? '0' + d.getFullYear() : '' + d.getFullYear();
    var month = Number(d.getMonth()) + 1 < 10 ? '0' + Number(d.getMonth() + 1) : '' + Number(Number(d.getMonth()) + 1);
    var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
    var hour = d.getHours() < 10 ? '0' + d.getHours() : '' + d.getHours();
    var minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : '' + d.getMinutes();
    var seconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : '' + d.getSeconds();
    if (format == "YYYY-MM-DD") {
        return year + '-' + month + '-' + day;
    } else if (format == "YYYY-MM-DD HH:MM:SS") {
        return year + '.' + month + '.' + day + '  ' + hour + ':' + minutes + ':' + seconds;
    } else if (format == "HH:MM:SS") {
        return hour + ':' + minutes + ':' + seconds;
    } else if (format == "HH:MM") {
        return hour + ':' + minutes;
    }
}

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
function countDown() { }
countDown.prototype.start = function (set_seconds) {
    if (!set_seconds) {
        return {
            day: 0,
            hour: 0,
            minute: 0,
            second: 0
        }
    }
    let seconds = set_seconds
    let [day, hour, minute, second] = [0, 0, 0, 0]
    if (seconds > 0) {
        day = Math.floor(seconds / (60 * 60 * 24))
        hour = Math.floor(seconds / (60 * 60)) - (day * 24)
        minute = Math.floor(seconds / 60) - (day * 24 * 60) - (hour * 60)
        second = Math.floor(seconds) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60)
    }
    if (day < 10) {
        day = '0' + day
    }
    if (hour < 10) {
        hour = '0' + hour
    }
    if (minute < 10) {
        minute = '0' + minute
    }
    if (second < 10) {
        second = '0' + second
    }
    if (seconds > 0) {
        return {
            day,
            hour,
            minute,
            second
        }
    } else {
        return 0
    }
}
let countDownTime = new countDown();

// let ArrayBufferToHex = (ArrayBuffer) => {
//     // let result1 = Array.prototype.map.call(new Uint8Array(ArrayBuffer), x => ('00' + x.toString(16)).slice(-2)).join('');
//     let result = web3.utils.bytesToHex(new Uint8Array(ArrayBuffer));
//     return result;
// }
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

// 参数截取
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

// 倒计时事件 秒
const getcountDown = (value, nowTime, format) => {
    // let nowTime = (new Date().getTime()) / 1000; // 当前时间 秒
    value = Number(value);
    if (value == 0 || value == "" || !value || value <= nowTime) {
        return "-";
    }
    if (isNaN(value)) {
        return "";
    }
    // value--;
    let timediff = Math.round(value - nowTime); //获取时间差
    let day = parseInt(timediff / 60 / 60 / 24);
    let hr = parseInt(timediff / 60 / 60 % 24);
    let min = parseInt(timediff / 60 % 60);
    let sec = parseInt(timediff % 60);

    day = day > 9 ? day : '0' + day;
    hr = hr > 9 ? hr : '0' + hr;
    min = min > 9 ? min : '0' + min;
    sec = sec > 9 ? sec : '0' + sec;
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

// 判断空值
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

// 指定范围内随机数
const randomNumber = (min, max) => {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num
}

// 统计数组中各个元素出现的次数
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

// 获取视口宽高尺寸
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

// 函数防抖
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

// 函数节流
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

// 隐藏手机号中间四位
const hidePhone = (phone) => {
    return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
}

// 手机号码
const isPhone = (s) => {
    return /^1[0-9]{10}$/.test(s);
}

// 是否座机号码
const isFixedphone = (s) => {
    return /^\d{3}-\d{8}|\d{4}-\d{7}$/g.test(s);
}

// 邮箱
const isEmail = (s) => {
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s);
}

// 邮编
const isPostcode = (s) => {
    return /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/g.test(s);
}

// URL地址
const isURL = (s) => {
    return /^http[s]?:\/\/.*/.test(s);
}

// 身份证
const isIdCard = (s) => {
    return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(s);
}

// 解析对象 { k: 1, i: 3 } k=1&i=3
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
 * 将时间解析为字符串
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
const parseTime = (time, cFormat) => {
    if (arguments.length === 0 || !time) {
        return null
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
        date = time
    } else {
        if ((typeof time === 'string')) {
            if ((/^[0-9]+$/.test(time))) {
                // support "1548221490638"
                time = parseInt(time)
            } else {
                // support safari
                // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
                time = time.replace(new RegExp(/-/gm), '/')
            }
        }

        if ((typeof time === 'number') && (time.toString().length === 10)) {
            time = time * 1000
        }
        date = new Date(time)
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
        const value = formatObj[key]
        // Note: getDay() returns 0 on Sunday
        if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
        return value.toString().padStart(2, '0')
    })
    return time_str
}

/**
 * 多久前
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
const formatTime = (time, option) => {
    if (('' + time).length === 10) {
        time = parseInt(time) * 1000
    } else {
        time = +time
    }
    const d = new Date(time)
    const now = Date.now()

    const diff = (now - d) / 1000

    if (diff < 30) {
        return '刚刚'
    } else if (diff < 3600) {
        // less 1 hour
        return Math.ceil(diff / 60) + '分钟前'
    } else if (diff < 3600 * 24) {
        return Math.ceil(diff / 3600) + '小时前'
    } else if (diff < 3600 * 24 * 2) {
        return '1天前'
    }
    if (option) {
        return parseTime(time, option)
    } else {
        return (
            d.getMonth() +
            1 +
            '月' +
            d.getDate() +
            '日' +
            d.getHours() +
            '时' +
            d.getMinutes() +
            '分'
        )
    }
}


export {
    getUrlParams,
    formatDecimal,
    timeHadelSeconds,
    escape2Html,
    urlEncode,
    deviceMethod,
    countDownTime,
    getcountDown,
    // ArrayBufferToHex,
    deepCopy,
    isEmpty,
    randomNumber,
    staArrNum,
    getViewportOffset,
    throttle,
    debounce,
    hidePhone,
    isPhone,
    isFixedphone,
    isEmail,
    isPostcode,
    isURL,
    isIdCard,
    queryStr,
    parseTime,
    formatTime,
}