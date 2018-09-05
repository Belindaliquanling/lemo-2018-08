// 如果你想自定义一个v-model双向绑定的功能
// 就在你的组件当中添加一个value的prop
// 在组件的内容修改时 $emit('input',传递修改过后的参数)





Vue.component('Input',{

    props:{
      value:String
    },
    watch:{
     input(val,oldval){
          // 在Input组件内部 input变量发生的变化的时候
      this.$emit('input',val)
     },
     value(val){
          // 接收到父作用域中的变化 修改当前作用域进行同步
          this.input = val 
     }
    },
 template:`
 
 <div class="input"> 
 <input type="text" v-model="input"/>
 </div>
 
 `,
data(){
return {
    input:this.value
}
}
})