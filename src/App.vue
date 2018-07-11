<!-- 模板 -->
<template>
	<div id="app">
		<router-link to="/login">请登录</router-link>
		<router-link to="/home">进入首页</router-link>
		<router-view/>
	</div>
</template>

<!-- js代码 -->
<script>
export default {
	name: 'App'
}
</script>

<!-- css样式 -->
<style>
	@import "../static/css/global.css";
</style>
