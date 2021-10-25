/*
 * @Author: Jackie
 * @Date: 2021-07-23 11:14:28
 * @LastEditTime: 2021-10-25 15:05:01
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


export default api
