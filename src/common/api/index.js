/*
 * @Author: Jackie
 * @Date: 2021-07-23 11:14:28
 * @LastEditTime: 2022-01-24 18:57:38
 * @LastEditors: Jackie
 * @Description: file content
 * @version: 
 */
import { get, post } from './http';
const api = new Object();
/**
 * 验签颁发token
 */
api.verifySignature = p => post('v1/verify_signature', p);
/**
 * 所有作品list
 */
api.workList = p => get('v1/works/market_list', p);

/**
 * 登录
 * @param {*} p 
 * @returns 
 */
api.login = p => post('/v1/user/login', p);


export default api
