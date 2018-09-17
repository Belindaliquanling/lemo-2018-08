<template>
<el-container class="page">
    <div class="box">
<h3>登录</h3>
<el-form label-width="50px">
    <el-form-item label="帐号">
 <el-input type="text" v-model="form.username"></el-input>
    </el-form-item>
       <el-form-item label="密码">
 <el-input type="password" v-model="form.password" ></el-input>
    </el-form-item>
    <el-form-item >
    <el-button type="primary"
    @click="login"
     style="width:100%">
        登录
    </el-button>
    </el-form-item>
    <el-form-item>
    <router-link to="/register">还没有帐号，请先注册</router-link>
</el-form-item>
</el-form>


    </div>


</el-container>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
              form:{
                    username:'',
                password:''
              }
            }
        },
        methods:{
          login(){
            //   axios.get('/api/home',{
            //       params:{
            //           a:100
            //           //use for get request
            //       }
            //   }).then(res=>{
            //       console.log(res)
            //   }).catch(err=>{
            //       console.log(err)
            //   })
            // axios.post('/api/home ?a=100',{
            //     username:'张三',
            //     password:"123456"
            // }).then(res=>{
            //     console.log(res)
            // }).catch(err=>{
            //     console.log(err)
            // })
            // axios.delete('/api').then(res=>{
            //     console.log(res)
            // }).catch(err=>{
            //     console.log(err)
            // })
            // axios({
            //     url:'/api',
            //     method:'get',
            //     params:{
            //         //querystring 查询字符串
            //         a:100
            //     },
            //     data:{
            //         //post 才能使用data
            //     },
            //     timeout:1000,
            //     responseType:'json'
            // }).then(res=>{
            //     console.log(res)
            // }).catch(err=>{
            //     cosnole.log(err)
            // })
            axios.post('/api/login',this.form).then(res=>{
                // console.log(res)
                if(res.data){
                    // console.log(this.$route)
                    //   console.log(this.$router)
                    //$router用于处理路由跳转
                    this.$router.push('/')
                    

                }
            }).catch(err=>{
                console.log(err)
            })
          }
        }
    }
</script>

<style lang="less" >
.box{
   width: 320px;
   height: auto;
   margin: 100px auto;
   border: 1px solid #000;
   padding: 50px 20px;
   h3{
       text-align: center;
       margin: 10px;
   }
}
</style>