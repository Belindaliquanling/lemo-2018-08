// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI) //add vue plugin
import plugin from './plugins/index.js'
Vue.use(plugin,{a:100})
Vue.config.productionTip = false
//1.局部混入 解决多个api相同的情况下但又不是全局
//2.全局混入 vue.mixin()
//混入的作用：避免编写 相同的选项(维护的问题)
//全局指令 Vue.directive('ff',{}) 指令使用比较频繁的情况
//局部指令只使用一次或少量次数
Vue.directive('ff',{
  bind(el,binding,vnode){
    //  console.log(binding)
    console.log(vnode)
    //获取binding的值
    el.value=binding.value
    //绑定的值在组件中的变量名称
    const name=binding.expression
    //给元素添加原生事件获取到 元素的内容变化
    el.addEventListener('input',function(){
      //通过vnode的context修改组件中对应的变量
      //vnode.context指令所在的组件
      vnode.context[name]=el.value
    })
  },
  inserted(el,binding){
    //表示该指令所在的元素已经插入到dom了
    //el.focus
  },
  update(el,binding){
    el.value=binding.value
  }
})
Vue.mixin({
  data(){
    return{
      num:10010
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
