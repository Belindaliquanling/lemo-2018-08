# test

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
#Vnode
Vnode 是vue里的虚拟dom
dom 浏览器dom
虚拟dom 虚拟的一套dom 
和真实dom的结构类似html元素dom对象结构
为什么要做一套虚拟的出来呢？
真实的html标签dom对象是会被浏览器渲染出来的必定会消耗很多的图形运算功能 
虚拟dom是一个对象
如果我写在组件里 循环了1000条数据，如果我更改了1000里面的2条数据浏览器不会重新再渲染1000次
虚拟dom会有两套（虚拟dom，old虚拟dom）
虚拟dom里的东西会和真实dom绑定在一起
一个组件就是一个虚拟dom
当数据发生变化虚拟dom和old虚拟dom 会去做数据的比较，当数据发生变化时，才会去更新真实的dom元素
如果我写在组件里 循环了1000条数据，如果我更改了1000里面的2条数据浏览器会重新再渲染1000次



单页面（spa）
spa 就是把路由页面跳转 搬到前端来进行渲染 解决前后的分离的问题
1.hash 模式 #锚点 不会跳转页面但会被浏览器捕获到