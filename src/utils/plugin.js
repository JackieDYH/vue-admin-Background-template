/*
 * @Author: Jackie
 * @Date: 2021-08-03 17:48:25
 * @LastEditTime: 2021-08-05 15:49:20
 * @LastEditors: Jackie
 * @Description: Vue插件
 * @version: 
 */
export default {
    install(Vue, Options) {
        // // 添加属性与方法
        // //这里我写的$testProp等加了$符号的，表示他为vue全局的，但实际上不加也可以的，访问时也不加就行了
        // Vue.prototype.$myoption = '我是来自插件的属性',
        //     Vue.prototype.$myfn = function () {
        //         console.log('我是来自插件的方法')
        //     }
        // // 添加全局混入
        // Vue.mixin({
        //     mounted() {
        //         console.log('组件创建成功')
        //     },
        // })
        // // 添加全局过滤器
        // Vue.filter('ellipsTexts', (text, num) => {
        //     if (text) {
        //         if (text.length > num) {
        //             return text.substring(0, num) + '...';
        //         } else {
        //             return text;
        //         }
        //     } else {
        //         return text;
        //     }
        // })
        // 添加全局指令 只能输入数字 v-number-only
        Vue.directive('numberOnly', {
            bind(el) {
                el.handler = function () {
                    el.value = el.value.replace(/\D+/, '');
                };
                el.addEventListener('input', el.handler);
            },
            unbind(el) {
                el.removeEventListener('input', el.handler);
            }
        })
        /***
        * 防抖 单位时间只触发最后一次
        *  @param {?Number|300} time - 间隔时间
        *  @param {Function} fn - 执行事件
        *  @param {?String|"click"} event - 事件类型 例："click"
        *  @param {Array} binding.value - [fn,event,time]
        *  例：<button v-debounce="[reset,`click`,300]">刷新</button>
        *  也可简写成：<button v-debounce="[reset]">刷新</button>
        */
        Vue.directive('debounce', {
            inserted: function (el, binding) {
                let [fn, event = "click", time = 300] = binding.value
                let timer
                el.addEventListener(event, () => {
                    timer && clearTimeout(timer)
                    timer = setTimeout(() => fn(), time)
                })
            }
        })
    }
}