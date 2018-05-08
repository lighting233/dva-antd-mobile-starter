# dva-antd-mobile-starter [![Build Status](https://travis-ci.org/xlsdg/dva-antd-mobile-starter.svg?branch=master)](https://travis-ci.org/xlsdg/dva-antd-mobile-starter)

> Get started with Dva.js and Ant Design mobile.

# 一·项目环境
> 1. 安装node.js,并配置环境变量。
> 2. clone项目，并在**dev**分支开发。
> 3. 运用node.js的包管理工具（npm）进行依赖安装(如果下载缓慢请配置[淘宝镜像](https://npm.taobao.org/))：
<pre><code>npm install</code></pre>
> 4. 项目启动：
<pre><code>npm start</code></pre>
> 5. 项目打包：

>> 先更改.roadhogrc.js目录下打包目录，之后进行打包：
<pre><code>npm run build</code></pre>

# 二·目录介绍

## 项目在src目录下

> 1. **assets**目录存放图片。
> 2. **common**目录下的**commonVar.js**存放全局公共变量。（在此切换开发，生产，测试环境的domain，与roadhogrc打包目录）
> 3. **componments**目录存放公共组件。
> 4. **models**目录存放页面对应的model。
> 5. **pages**目录存放各个页面。
> 6. **services**目录存放各页面请求。
> 7. **utils**目录下的**request.js**封装请求方法。
> 8. **index.ejs**为html入口。
> 9. **index.less**为全局样式。
> 10. **router.jsx**为路由注册地址与对应models注册地址。**注意**：原来各项目models注册地址为index.js，现迁移到router.jsx。

# 三·注意事项

> 1. 不应在index.less文件修改全局样式，如需修改antd-mobile组件默认样式[请参考](https://pro.ant.design/docs/style-cn#%E8%A6%86%E7%9B%96%E7%BB%84%E4%BB%B6%E6%A0%B7%E5%BC%8F).
> 2. 本项目使用哈希路由，如需在ios系统分享请使用代理页面中转，以免丢失#/后参数。

# 四·代码规范

> 1. 各页面应使用react生命周期模式构建，仅展示用组件可用function形式编写。
> 2. pages目录下的index.jsx文件映射state到组件时，应解构到对应的namespace即可，不要在此解构namespace的属性以保持代码整洁性。
> 3. 各路由注册，方法名，请求地址，namespace下的变量等都需提供明确注释信息。
> 4. 如果修改他人的代码请将原来的代码注释掉并注明修改原因及修改时间。

