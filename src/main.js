// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入vue框架
import Vue from 'vue'
// 引入根组件
import App from './App'
// 引入路由配置
import router from './router'
// 引入vuex
import store from './vuex/store'

// 关闭生产模式下给出的提示
Vue.config.productionTip = false

// 定义实例
new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
})
