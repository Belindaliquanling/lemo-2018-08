<template>
  <div id="app">
        <Header class="header">
              <div>Admin</div>
              <div v-if="user.username">
                <span>欢迎您:{{user.username}}{{c}}</span>
                 <Button size="small" type="error" @click="logout">安全退出</Button>
              </div>
              <div v-else >
                 <router-link to="/login">登录</router-link>
              </div>
        </Header>
       
    <router-view/>
  </div>
</template>

<script>
 import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
 //mapState & mapGetters 都是属性 都混入到computed选项里
 //mapMutations&mapActions 都是方法 都混入到methods 选项里面去
export default {
  name: 'App',
  methods:{
    logout(){
      this.$store.commit('logout')
      this.$router.push('/login')
    }
  },
  
  computed:{
    //把一个对象放到另一个对象里
    ...mapGetters(['user','c'])
   
  }
  
}
</script>

<style>
html,body,#app{
  height: 100%;
}
#app .header{
   background-color: #fff;
   display: flex;
   justify-content: space-between
}
</style>
