<template>
  <div id="app">
   {{name | UpperCase |LowerCase |filterNumber}}
   {{name1 | Name('张')}}
   {{yuan|Yen}}
  </div>
</template>

<script>
import Home from './views/Home'
import test from './mixins/test'

export default {
  name: 'App',
  mixins:[test],//局部混入
  filters:{
    UpperCase(value){
      return value.toUpperCase()
    },
    LowerCase(value){
      return value.toLowerCase()
    },
    filterNumber(value){
      return value.replace(/[0-9]/g,'')
    },
    Name(value,n){
      return value.replace(n,'')
    }
  },
  created(){
    // console.log(1)
    
  },
  components:{
    Home
  },
  data(){
    return{
      title:'哈哈',
      name:'Belinda123456',
      name1:'张三',
      yuan:100
    }
  }
}
</script>

<style>

</style>
