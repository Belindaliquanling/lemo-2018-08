<template>
  <div id="app">
    <Button color='red'>按钮</Button>
    <Test/>
  </div>
</template>

<script>

import Button from './components/Button'
import Test from './components/Test'
export default {
  name: 'App',
  components: {
   
    Button,
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
