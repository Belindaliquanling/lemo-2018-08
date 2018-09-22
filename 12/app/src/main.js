// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import iview from 'iview'
import 'iview/dist/styles/iview.css'  // 使用 CSS
Vue.use(iview)
Vue.config.productionTip = false
//前置路由守卫
router.beforeEach((to,from,next)=>{
// to 新的路由要去哪里
// from 原来的路由来自哪里
//next 放行 函数

if(to.meta.requireAuth){
  //vue仓库里的用户信息
  //检测vue仓库里的用户信息是否存在
   if(store.getters.user.username){
    //存在 验证通过 放行
    next()
   }else{
     //不存在验证失败,让其跳转至不需要验证登录的页面
     next('/login')
   }
  
}else{  //不需要验证直接放行
  next()}
//判断是否已经登录
if(to.meta.checkIfLogin){
if(store.getters.user.username){
  //路由让其返回至原地址
//router.back()
next('/')
}else{
  //如果未登录就放行
  next()
}
}

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//把路由添加到vue 实例
  store,//把仓库添加到vue 实例
  components: { App },
  template: '<App/>',
  mounted(){
    
  }
})
