/*
 * @version: 
 * @Description: file content
 * @Author: Jackie
 * @Date: 2021-06-15 11:17:40
 * @LastEditors: Jackie
 * @LastEditTime: 2021-10-25 15:14:18
 */
import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n); // 通过插件的形式挂载//中 cn|CHN 英 en|ENG 韩 ko|KOR
// localStorage.setItem("language","CHN")
export const i18n = new VueI18n({
    locale: localStorage.getItem('language') || 'CHN',
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
        'CHN': require('./cn.json'), // 中文语言包
        'ENG': require('./en.json'), // 英文语言包
        'KOR': require('./ko.json')  // 韩语言包
    }
});
// console.log(i18n, 'i18n')
// 重新封装方法
export function $t(args) {
    return i18n.tc.call(i18n, args);
}
