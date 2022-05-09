/*
 * @Author: Jackie
 * @Date: 2022-05-07 13:57:13
 * @LastEditTime: 2022-05-07 14:08:30
 * @LastEditors: Jackie
 * @Description: 全局过滤器
 * @FilePath: /vue-admin-template/src/filter/filter.js
 * @version: 
 */
/**
 * 格式化时间
 */
let formatTime = (value, format) => {
  if (value == 0 || value == "" || !value) {
    return "-";
  }
  value = Number(value);
  if (isNaN(value)) {
    return "";
  }
  var _format = function (number) {
    return number < 10 ? "0" + number : number;
  };
  var value1 = value.length > 10 ? value : value * 1000;
  var weekday_list = ["日", "一", "二", "三", "四", "五", "六"];
  var d = new Date(value1);
  var year = _format(d.getFullYear());
  var month = _format(d.getMonth() + 1);
  var day = _format(d.getDate());
  var hour = _format(d.getHours());
  var minutes = _format(d.getMinutes());
  var seconds = _format(d.getSeconds());
  var weekday = d.getDay();
  if (format == "YYYY-MM-DD") {
    return year + "-" + month + "-" + day;
  } else if (format == "MM-DD") {
    return month + "-" + day;
  } else if (format == "YYYY-MM-DD HH:MM:SS") {
    return (
      year +
      "-" +
      month +
      "-" +
      day +
      "  " +
      hour +
      ":" +
      minutes +
      ":" +
      seconds
    );
  } else if (format == "HH:MM:SS") {
    return hour + ":" + minutes + ":" + seconds;
  } else if (format == "HH:MM") {
    return hour + ":" + minutes;
  } else if (format == "YYYY/MM/DD weekday") {
    return (
      year + "/" + month + "/" + day + "  " + "星期" + weekday_list[weekday]
    );
  } else if (format == "YYYY-MM-DD HH:MM") {
    return year + "-" + month + "-" + day + "  " + hour + ":" + minutes;
  } else if (format == "YYYY-MM") {
    return year + "-" + month;
  } else if (format == "yyyy-mm-dd hh:mm") {
    return year + "年" + month + "月" + day + "日 " + hour + ":" + minutes;
  } else if (format == "mm-dd hh:mm") {
    return month + "月" + day + "日 " + hour + ":" + minutes;
  } else {
    return year + "-" + month + "-" + day;
  }
};

// 中间省略号
let ellipsAddress = (text, n1 = 5, n2 = 11) => {
  if (text) {
    if (text.length > n1) {
      n1 = n1 > 1 ? n1 : 1;
      return (
        text.substring(0, n1) +
        "..." +
        text.substring(text.length - n2, text.length)
      );
    } else {
      return (
        text.substring(0, 5) +
        "..." +
        text.substring(text.length - 11, text.length)
      );
    }
  } else {
    return text;
  }
};

export { formatTime, ellipsAddress };
