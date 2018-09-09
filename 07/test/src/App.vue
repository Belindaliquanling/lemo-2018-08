<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <Test/>
  </div>
</template>

<script>
  // Test 是局部组件
  import Test from './components/Test'
export default {
  name: 'App',
  render(createElement){
        return createElement("div","xx")
  },
  data(){
   return {
     title:1
   }
  },
  methods:{
    run(){

    }
  },
  components:{
    Test
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
