import Vue from 'vue'
import Vuex from 'vuex'
import storage from '@/util/storage';

Vue.use(Vuex)

const state = {
	user: {}
}

const mutations = {
	// 管理员登录
	ADMINLOGIN (state, user) {
		console.log(user);
		state.user = user;
		// 存储登陆信息
		storage.setItem('user', user);
	},
	// 管理员退出
	ADMINLOGOUT (state) {
		state.user = '';
		storage.removeItem('user');
	}
}

// getters
const getters = {
	adminer: function(state){
		return state.user;
	}
}

// 创建驱动actions可以使得mutations得以启动
const actions ={
	// 管理员登录
	adminlogin ({commit}, data) {
		commit('ADMINLOGIN', data)
	},
	// 管理员登录
	adminlogout ({commit}) {
		commit('ADMINLOGOUT')
	}
}

const store = new Vuex.Store({
	state,
	mutations,
	getters,
	actions
});

export default store;