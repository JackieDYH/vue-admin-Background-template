/*
 * @Author: Jackie
 * @Date: 2021-07-23 11:14:28
 * @LastEditTime: 2022-01-25 16:18:03
 * @LastEditors: Jackie
 * @Description: file content
 * @version: 
 */
//初始状态
// import isLang from '@/common/lang';
export default {
    routerMeta: {}, //页面路由 meta配置
    // routerHistory: {}, //拼搭页面返回上一级
    lang: "CHN", //语言 可选 | 本地存储
    // isLang, // 语言包
    defaultServer: "http://192.168.10.17:7001",
    serverList: [
        { server: 'http://139.196.127.63:9090/mock/134', name: "测试服" },
        { server: 'http://192.168.10.17:7001', name: "数据服" }
    ],
}