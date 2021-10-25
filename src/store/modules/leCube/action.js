/*
 * @Author: Jackie
 * @Date: 2021-07-30 10:14:15
 * @LastEditTime: 2021-09-22 14:27:33
 * @LastEditors: Jackie
 * @Description: file content
 * @version: 
 */
//异步操作mutation的方法
import axios from '@/common/api';
export default {
    isLoginSync({ commit }, value) {
        commit("setisLogin", value);
    },
    userInfoSync({ commit }, value) {
        commit("setuserInfo", value);
    },
    // 请求api所有作品列表
    /**
     * @description: 
     * @param {*} commit
     * @param {*} sort 排序
     * @param {*} status 状态 0图纸 1 已上链 2可复刻 3出售中 
     * @param {*} page 页码
     * @param {*} pagesize 页大小
     * @param {*} keyword 搜索关键字
     * @param {*} max 价格
     * @param {*} min 价格
     * @param {*} chain 链
     * @param {*} order_by 排序
     * @param {*} from D
     * @param {*} size 尺寸
     * @return {*}
     */
    async getApiGoodsListSync({ commit }, { sort, status, page, pagesize, keyword, max, min, chain, order_by, from, size }) {
        try {
            const res = await axios.workList({ sort, status, page, pagesize, keyword, max, min, chain, order_by, from, size });
            if (res.status == 1) {
                res.data.list.forEach((item => {
                    item.showPopover = false;
                    item.showPopover2 = false;
                    item.showPopover3 = false;
                }));
                commit("setgoodsList", res.data);
                // commit("setgoodsList", res.data.list);
            }
        } catch (err) {
            console.log("作品列表数据:", err);
        }
    },
    // 我的作品列表
    async getApiMyGoodsListSync({ commit }, { sort, status, page, pagesize, type }) {
        try {
            const res = await axios.myWorkList({ sort, status, page, pagesize, type });
            if (res.status == 1) {
                res.data.list.forEach((item => {
                    item.showPopover = false;
                    item.showPopover2 = false;
                    item.showPopover3 = false;
                }));
                commit("setgoodsList", res.data);
            }
        } catch (err) {
            console.log("我的作品列表:", err);
        }
    },
    // 作品列表
    goodsListSync({ commit }, value) {
        commit("setgoodsList", value.data);
    },
    // 追加作品列表
    pushGoodsListSync({ commit }, value) {
        commit("pushgoodsList", value);
    },
    modifygoodsListSync({ commit }, value) {
        commit("modifygoodsList", value);
    },
    // 作品api参数列表
    setWorkParamSync({ commit }, Obj) {
        commit("setworkParam", Obj);
    },
    // 重置作品api参数列表
    emptyWorkParamSync({ commit }) {
        commit("setworkParam", { sort: '', status: '', page: '', pagesize: '24', keyword: '', max: '', min: '', chain: 'Ethereum,Polygon', type: '', order_by: '', from: '', size: '' });
    },
    // 重置作品列表数据
    emptyGoodsListSync({ commit }) {
        commit("setgoodsList", { list: [], total: 0 });
    }
}