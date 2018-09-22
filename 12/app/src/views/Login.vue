<template>
   <layout class="page">
   <Form class="login">
 <FormItem :error="formError.account" >
<Input placeholder="帐号" v-model="form.account" @input="formError.account=''" >
<Icon type="ios-contact" slot="prepend" :size="iconSize"/>
</Input>

 </FormItem>
  <FormItem :error="formError.password">
<Input type="password" placeholder="密码" v-model="form.password" @input="formError.password=''">
<Icon type="md-lock" slot="prepend" :size="iconSize"/>
</Input>
 </FormItem>
  <FormItem :error="formError.verifiy">
<Input  placeholder="验证码" v-model="form.verifiy" @input="formError.verifiy=''" />
 </FormItem>
 <FormItem>
     <img :src="verifiyCodeSrc" @click="getVerifiy"/>
 </FormItem>
   <FormItem>
<Button :long="true" type="primary" @click="login">登录</Button>
 </FormItem>
   </Form>  
   </layout>
</template>

<script>
  import axios from 'axios'
    export default {
      
        data(){
            return{
                iconSize:18,
                verifiyCodeSrc:"/api/verifiy.gif",
                form:{
                    account:'',
                    password:'',
                    verifiy:''
                },
                formError:{
                     account:'',
                    password:'',
                    verifiy:''
                }
            }
        },
        methods:{
            getVerifiy(e){
                const verifiySrc = "/api/verifiy.gif"+'?'
                this.verifiyCodeSrc=verifiySrc+e.timeStamp
            },
            login(e){
                axios.post('/api/login',this.form).then(res=>{
                 this.$store.commit('login',res.data)   
                 this.$router.push('/')
                }).catch(err=>{
               this.getVerifiy(e)
               const {data} = err.response
               Object.keys(data).forEach(k=>{
                   this.formError[k]=data[k]
               })
                })
            }
        }
    }
</script>

<style >
.login{
    width: 320px;
    margin: 100px auto;
}
</style>