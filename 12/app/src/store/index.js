import Vue from 'vue'
import Vuex from 'vuex'
//Regist vuex plugin
Vue.use(Vuex)
//vue 模块化
import rule from './modules/rule'
import users from './modules/user'
//create a store
//仓库的原始数据可以通过预设 也可以通过ajax向后台请求
//默认在vuex 仓库还没创建时 获取到本地存储里的用户数据
 const user=JSON.parse(localStorage.getItem('user')) ||{
     username:null,
    phone:null,
   email:null
 }
export default new Vuex.Store({
    
     state:{
        //the original data of the store 对象的键值对
       user,
        //把从本地存储里获取到的数据放到state原始数据中
        c:100,
         d:200
     },
    getters:{
        //方e法 订阅数据变化的
       user(state){
           return state.user
       },
        c(state){
         return state.c
        },
        d(state){
        return state.d
       }
       

     },
  mutations:{
        //方法 用来修改state里的原始数据的
       login(state,playload){
             //在mutations里的所有方法都可以设置第二个参数 用来重载你要修改的数据
           //修改vuex state 里的user数据
           state.user=playload
            //同时把user登录的数据添加至localStorage
           //JSON.stringify(playload) 把对象转换成json
           localStorage.setItem('user', JSON.stringify(playload))
    
        },
        logout(state,playload){
            state.user={
                username:null,
                 phone:null,
                email:null
            }
            localStorage.removeItem('user')
       },
         changeC(state){
         state.c++;
         },
        changeD(state){
             state.d++;
            }

     },
    actions:{
        //方法
         CHANGE_NUMBER({commit},playload){
           //action 也是一个一对多的功能 一个action请求可以触发多个commit提交
        commit('changeC',playload)
           commit('changeD',playload)
        }
     
    },
    modules:{
         rule,
         users
    }
   
})

//相当于vuex在vue 在全局混入了一个仓库
//仓库里的getters只是用来订阅数据的 不能直接改变获取到的数据
//mutations 里的方法需要通过$store对象的commit 方法来提交修改