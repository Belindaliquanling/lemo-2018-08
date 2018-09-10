// import App from './app'
 import '@/style.css'
// import './assets/style.less'
// vue/dist/vue.esm 是用于在webpack的开发环境时使用的
import Vue from 'vue'
import App from './App'


new Vue({
el:'#app',
template:`

<App/>

`,
components:{
    App
}

})