<template>
	<div>
		<h1>后台首页</h1>
		<button @click="handleLogout">退出</button> 
	</div>
</template>

<script>
	
	export default {
		data: function(){
			return {}
		},
		
		computed:{
		
		},

		methods:{
			handleLogout() {
				this.$store.dispatch('adminlogout');
				this.$router.push('/login');
			}
		}
	}
</script>

<style scoped>
	
</style>