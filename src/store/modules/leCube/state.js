/*
 * @Author: Jackie
 * @Date: 2021-07-23 11:14:28
 * @LastEditTime: 2021-09-22 14:11:57
 * @LastEditors: Jackie
 * @Description: file content
 * @version: 
 */
//初始状态
export default {
    isLogin: false, //是否登录
    userInfo: {
        address: "", //钱包地址
        token: "",
    },
    goodsList: {
        list: [],
        total: 0,
    },//作品列表
    workParam: { //work api 参数列表
        sort: '', //排序
        status: '', //状态
        page: '', //页码
        pagesize: '24', //页大小
        keyword: '', //搜索关键字
        max: '', //价格
        min: '', //价格
        chain: 'Ethereum,Polygon', //链
        type: '', //0我的作品 1我的复刻品 2我的收藏
        order_by: '',
        from: '',
        size: '',
    }
}