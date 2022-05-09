/*
 * @Author: Jackie
 * @Date: 2021-07-19 14:32:46
 * @LastEditTime: 2021-10-25 14:32:50
 * @LastEditors: Jackie
 * @Description: file content
 * @version: 
 */
const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    productionSourceMap: false,
    lintOnSave: false,
    filenameHashing: true,
    /*二 px转rem的配置 postcss-pxtorem插件 可以设置忽略文件*/
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/css/mixin.scss";@import "@/assets/css/variable.scss";`,
            },
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue: 192, // 换算的基数，设计稿宽度的1/10 【设置设计稿尺寸为1920】
                        selectorBlackList: ['van', 'dyh-'], // 忽略转换正则匹配项
                        propList: ['*'],//需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
                        unitPrecision: 5,//允许REM单位增加的十进制数字
                        replace: true,//替换包含rems的规则
                        mediaQuery: false,//是否允许在媒体查询中转换px
                        minPixelValue: 0,//设置要替换的最小像素值
                        exclude: /node_modules/i,//要忽略并保留为px的文件路径
                    })
                ]
            }
        }
    },

    // devServer: {
    //     port: 8082,
    //     open: true,  //打开浏览器窗口
    //     proxy: {
    //         // proxy all requests starting with /api to jsonplaceholder
    //         '/api': {
    //             // target: 'http://172.0.0.1:8080',
    //             ws: false,
    //             changeOrigin: true,
    //             // pathRewrite: {
    //             //     '/k': ''
    //             // }
    //         },
    //     }
    // }
}