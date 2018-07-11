<template>
	<div>
		<!-- 输出变量 -->
		<h1>{{ msg }}</h1>
	</div>
</template>

<script>
export default {
	// 定义页面名称，可以不要
	name: 'HelloWorld',
	data () {
		return {
			// 定义变量
			msg: 'HelloWorld'
		}
	}
}
</script>

<style scoped>
h1 {
	font-size: 16px;
	font-weight: normal;
}
</style>
