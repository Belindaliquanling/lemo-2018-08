// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 局部组件 私有组件
// import test,{Test1,Test2} from './test'
// import * as test from './test'
// import {Fna} from './moudlea'
// console.log(Fna)
import defaultA,{Fna,Test1,Test2,Test3,Test4}from './moudlea'
 console.log(defaultA)
 console.log(Fna)
 console.log(Test1,Test2,Test3,Test4)
 console.log(App)
// export default 导出是直接导出到 import 预设的变量,上 
// export 导出需要用 {}的方式去导入
// 获取到export 导出的所有成员 * as

// console.log(test)
// console.log(Test1,Test2)
// console.log(test)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
