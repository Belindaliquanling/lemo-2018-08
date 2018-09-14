<template>
  <div id="app">
    <!-- 路由切换容器 -->
    <!-- <a href="#/">首页</a>
    <a href="#/news">新闻</a> -->
    <router-link to="/">首页</router-link>
     <!-- 自动在history和hash模式切换 -->
     <router-link to="/news">新闻</router-link>
  <router-view/>    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
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
