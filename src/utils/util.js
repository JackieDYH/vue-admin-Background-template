// 工具函数
import dayjs from 'dayjs';

// =============================时间处理=============================
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
};

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
};

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
};

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
};

/**
 * 获取视口宽高尺寸
 * @returns 
 */
const getViewportOffset = () => {
    if (window.innerWidth) {
        return {
            w: window.innerWidth,
            h: window.innerHeight
        };
    } else {
        // ie8及其以下
        if (document.compatMode === 'BackCompat') {
            // 怪异模式
            return {
                w: document.body.clientWidth,
                h: document.body.clientHeight
            };
        } else {
            // 标准模式
            return {
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight
            };
        }
    }
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
};


export {
    formatTime,
    ellipsAddress,
    ellipsMoblie,
    ellipsText,
    getViewportOffset,
    deviceMethod
};