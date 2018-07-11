# vue-core-framework

> 项目基于Vue.js 2.x + vue-router + vuex + axios集成的一个简单版VUE全家桶。
>[线上预览地址](http://demo.liangxinghua.com/vue-core/login)

## 说明
该项目使用vue-cli脚手架生成目录，只有最核心的代码，非常精简，可以直接下载下来进行迭代开发，目前我们项目也在使用。

## 功能 ##
- [x] vuex---状态管理解决方案
- [x] vue-router---路由解决方案
- [x] axios---数据请求解决方案

## 目录结构介绍 ##

	|-- build                            // webpack配置文件
	|-- config                           // 项目打包路径
	|-- src                              // 源码目录
	|	|-- api                          // 接口API封装
	|	|-- assets                       // 静态资源文件
	|	|-- components                   // 组件
	|	|-- router                       // 路由信息
	|	|-- util                         // 工具包
	|  	    |-- fetch.js                 // axios封装
	|       |-- storage.js           	 // 数据存储封装
	|   |-- view                         // 页面包
	|		|-- error                    // 异常包
	|           |-- 404.vue              // 404
	|		|-- home                     // 首页
	|           |-- home.vue             
	|		|-- login                    // 登录
	|           |-- login.vue            
	|   |-- vuex                         // vuex包
	|   |-- App.vue                      // 页面入口文件
	|   |-- main.js                      // 程序入口文件，加载各种公共组件
	|-- .babelrc                         // ES6语法编译配置
	|-- .editorconfig                    // 代码编写规格
	|-- .gitignore                       // 忽略的文件
	|-- index.html                       // 入口html文件
	|-- package.json                     // 项目及工具的依赖配置文件
	|-- README.md                        // 说明

## 前提 ##

	//本地安装vue-cli脚手架
	npm i -g vue-cli

## 安装步骤 ##

	git clone https://github.com/mm-bt/vue-core-framework      // 把模板下载到本地
	cd vue-core-framework    // 进入模板目录
	npm install         // 安装项目依赖，等待安装完成之后

## 本地开发 ##

	// 开启服务器，浏览器访问 http://localhost:8080
	npm run dev

## 构建生产 ##

	// 执行构建命令，生成的dist文件夹放在服务器下即可访问
	npm run build

