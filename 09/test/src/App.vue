<template>
  <div id="app">
   
   <Button>哈哈哈</Button>
  </div>
</template>

<script>
import Home from './views/Home'
import test from './mixins/test'

export default {
  name: 'App',
  mixins:[test],//局部混入
  created(){
    // console.log(1)
    
  },
  components:{
    Home
  },
  data(){
    return{
      title:'哈哈'
    }
  }
}
</script>

<style>

</style>
