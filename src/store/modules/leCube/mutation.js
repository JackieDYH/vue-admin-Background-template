/*
 * @Author: Jackie
 * @Date: 2021-07-19 15:42:25
 * @LastEditTime: 2021-09-22 14:26:19
 * @LastEditors: Jackie
 * @Description: file content
 * @version: 
 */
//修改状态的方法
export default {
    setisLogin(state, value) {
        state.isLogin = value;
    },
    setuserInfo(state, value) {
        state.userInfo = value;
    },
    setgoodsList(state, value) {
        state.goodsList = value;
    },
    pushgoodsList(state, value) {
        try {
            // if (state.goodsList.list || value) return;
            state.goodsList.list.push(...value);
        } catch (error) {
            console.log("作品列表数据:", error);
        }
        // state.goodsList = state.goodsList.concat(value);
    },
    modifygoodsList(state, { id, obj }) {
        state.goodsList.list[id] = obj;
    },
    setworkParam(state, Obj) {
        // { sort, status, page, pagesize, keyword, max, min, chain }
        for (let key in Obj) {
            // if (Obj[key] !== undefined) {
            state.workParam[key] = Obj[key];
            // }
        }
        // state.workParam = { sort, status, page, pagesize, keyword, max, min, chain };
        // Object.assign(state.workParam,{ sort, status, page, pagesize, keyword, max, min, chain })
    },
}