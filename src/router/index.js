// 引入vue框架
import Vue from 'vue'
// 引入vue-router路由依赖
import Router from 'vue-router'
// 引入页面组件，命名为HelloWorld
import HelloWorld from '@/components/HelloWorld'
// 引入storage
import storage from '@/util/storage';

// 使用路由依赖
Vue.use(Router)

// 定义路由配置
const router = new Router({
	mode: 'history', //去除#
	routes: [
		{
			path: '/',
			redirect: '/login'
		},
		{
			path: '/home',
			meta: {requiresAuth: true},
			component: () => import('@/view/home/home')
		},
		{
			path: '/login',
			component: () => import('@/view/login/login')
		},
		// 404
		{
			path: '*',
			hidden: true,
			component: () => import('@/view/error/404')
		}
	]
});

// 路由拦截
// requireLogin： true需要权限，false不需要权限
router.beforeEach((to, from, next) => {
	if (to.matched.some(res => res.meta.requiresAuth)) {
		// 判断是否需要登录权限
		if (storage.getItem("user")) {
			next();
		} else {
			// 没登录则跳转到登录界面
			next({
				path: "/login"
			});
		}
	} else {
		next();
	}
});

// router.afterEach(() => {
	
// });

export default router;
