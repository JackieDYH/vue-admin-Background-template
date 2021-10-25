/*
 * @Author: Jackie
 * @Date: 2021-07-23 11:14:28
 * @LastEditTime: 2021-08-18 15:24:46
 * @LastEditors: Jackie
 * @Description: file content
 * @version: 
 */
// 计算属性
export default {
    isLogin : state => state.isLogin,
    userInfo : state => state.userInfo,
    goodsList : state => state.goodsList,
    workParam : state => {
        // 返回有用的key
        let obj = JSON.parse(JSON.stringify(state.workParam));
        Object.keys(obj).forEach(item=>{
            // 去除key中为空 且不为零
            if(!obj[item] && obj[item] !== 0)  delete obj[item]
        });
        return obj;
        // return state.workParam;
    },
}