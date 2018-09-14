<template>
  <div >
   
     <ul>
       <li v-for='(item,index) in list '
       :key="index"
       @click="list.push('laowang')">{{item}}</li>
     </ul>
    
  </div>
</template>

<script>
export default {
  mounted(){
   console.log(this)
  },
data(){
  return {
    list:['zhangsan','lisi']
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
