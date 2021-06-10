# uniapp-Community
这是一个uniapp的实战项目！

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


