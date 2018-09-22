import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import userManger from '@/views/userManger'
import SettingManger from '@/views/Setting'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        //当前路由的原数据 自定义
       requiresAuth:true //需要验证
      },
      redirect: '/users',
      children:[
        {
          path:'/users',
          name:'userManger',
          component:userManger,
          meta:{
            //当前路由的原数据 自定义
           requiresAuth:true //需要验证
          },
        },
        {
          path:'/setting',
          meta:{
            //当前路由的原数据 自定义
           requiresAuth:true //需要验证
          },
          name:'SettingManger',
          component:SettingManger
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta:{
        //当前路由的原数据 自定义
       checkIfLogin:true //需要验证
      }
    },
    {
      path: '/userManger',
      name: 'Register',
      component: Register
    },
    


  ]
})
