/*
* @Author: ASUS
* @Date:   2018-03-07 16:19:08
* @Last Modified by:   ASUS
* @Last Modified time: 2018-07-11 10:08:41
*/
import fetch from '@/util/fetch'

// 代理配置
const TMPURL = process.env.NODE_ENV === 'production' ? '/hibest_server' : '/api/hibest_server';

// 登录
export function login(params) {
	return fetch.post(TMPURL + '/admin/login/login', params);
}


