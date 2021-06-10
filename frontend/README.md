# frontend

## 1. uni-app 核心知识点
### 1.1 uni-app规范
- 页面文件遵循vue单文件组件（SFC）模块：每个页面有：模板块、脚本块、样式块
- 组件标签靠近小程序规范：标签使用的是小程序中的标签
- 借口能力（JS API)靠近微信小程序规范
- 数据绑定和事件处理同vue.js规范
- 为兼容多端运行，建议使用flex布局进行开发

### 1.2 uni-app特色
- 条件编译：#ifdef、#endif
- App端的Nvue开发
- HTML5+（只能在app中使用，小程序不行）

### 1.3 uni-app知识点
- 组件：基础组件、自定义组件
- API
- 路由，接近于小程序的页面切换
- 生命周期
- 语法、样式布局

### 1.4 uniapp的生命周期
> 详细参考文档：[uniapp框架](https://uniapp.dcloud.io/collocation/frame/lifecycle)
- 应用生命周期
	- onLanch：应用初始化完成触发一次，全局只触发一次
	- onShow：应用启动时，或者从后台进入前台时触发
	- onHide：应用从前台进入后台触发
- 页面生命周期
	- onLoad：页面加载时执行
	- onReady：页面初次渲染完成后执行
	- onShow：页面初次展示的时候执行
	- onHide：页面隐藏的时候执行
	- onUnload：页面卸载的时候执行
- 组件生命周期：参考vue的生命周期
	- beforeCreate
	- created
	- beforeMount
	- mounted
	- beforeUpdate
	- updated
	- beforeDestory
	- destoryed

## 2. uni-app开发环境搭建
> [官方文档](https://uniapp.dcloud.io/quickstart-cli)
- HbuiderX
- vue-cli的方式

## 3. 云函数
- project.config.json写上云函数所在目录"cloudfunctionRoot": "cloudfunctions/",
- app.json写上“cloud”:true
- 在微信的云函数目录右键新建node.js云函数，但是我们要注意我们的主要开发平台是vscode，所以可以使用webpack进行配置，将在vscode编写好的文件发送到dev编译好的微信平台
- 进入函数编写index.js
```javaScript
// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}
```
- 小程序中进行调用

```javaScript
wx.cloud.callFunction({
    // 云函数名称
    name: 'add',
    // 传给云函数的参数
    data: {
    a: 1,
    b: 2,
    },
})
.then(res => {
    console.log(res.result) // 3
})
.catch(console.error)
```

### 3.1 webpack 复制云函数文件配置
- 下载相关webpack的pluging
```
npm install copy-webpack-plugin --save-dev
```
- 在vue.config.js中进行相关配置

## 4. vuex的使用
- 创建store文件夹，并创建index.js文件
	- state是存储的数据
	- mutation是同步修改state数据的地方
```javaScript
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    age: 18,
    sexy: true,
    location: '安徽淮北'
  },
  mutations: {
    addAge(state, n) {
      state.age = state.age + n;
    },
    changeSexy(state) {
      state.sexy = !state.sexy;
    },
    changeLocation(state, location) {
      state.location = location;
    }
  }
})

export default store;
```
- 使用store的方法
	- 在computed中使用store的数据可以监听数据的变化
	- 修改数据要使用$store.commit方法，并且可以传递参数
```javaScript
computed: {
	age() {
		return this.$store.state.age;
	},
	isMan() {
		return this.$store.state.sexy ? '男' : '女';
	},
	location() {
		return this.$store.state.location;
	}，
	// 这也可以返回数据
	...mapState([
		'age',
		'location'
	]),
	mapState({
    // 箭头函数可使代码更简练
    count: state => state.count,

    // 传字符串参数 'count' 等同于 `state => state.count`
    countAlias: 'count',

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  })
},
methods: {
	changeUserInfo() {
		this.$store.commit('addAge', 1);
		this.$store.commit('changeSexy');
		this.$store.commit('changeLocation', '安徽池州');
	}
}
```



