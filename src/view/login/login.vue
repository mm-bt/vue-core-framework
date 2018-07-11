<template>
	<div class="login-wrap">
		<div class="form">
			<div>
				<label>用户名</label>
				<p><input placeholder="请输入用户名..." v-model="name"/></p>
			</div>
			<div>
				<label>密码</label> 
				<p><input v-model="pwd" type="password" placeholder="请输入密码..."/></p> 
			</div>
			<br/>
			<button @click="handleLogin">登陆</button> 
		</div>
	</div>
</template>

<script>
	import {login} from '@/api/api';
	
	export default {
		data: function(){
			return {
				name:'',
				pwd:''
			}
		},
		computed: {
				user() {
					return this.$store.state.user
				}
			},
			methods:{
				handleLogin() {
					// let params = {
					// 	name: this.name,
					// 	pwd: this.pwd,
					// };
					// console.log(params);

					let params = {
						telephone: '18180673372',
						code: '123456',
					};

					login(params).then(res => {
						console.log(res);
						// 登陆成功
						let user = {
							user_id: 1,
							telephone: '18180673372',
						};

						//分发管理员登录的action
						this.$store.dispatch('adminlogin', user);
						this.$router.push('/home');
					}).catch(err => {
						console.log(err);
					});
				}
			}
	}
</script>

<style scoped>
	.login-wrap{
		position: relative;
		width:100%;
		height:100%;
	}

	.login-wrap .form {
		position: absolute;
		left: 40%;
		top: 20%;
	}

	.login-wrap input {
		height: 30px;
		margin-bottom: 10px;
		border-radius: 5px;
		width: 200px;
	}

	.login-wrap button {
		height: 30px;
		border-radius: 5px;
		width: 50px;
	}
</style>