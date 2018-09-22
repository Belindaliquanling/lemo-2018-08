<template>
   <layout class="page">
   <Form class="register">
 <FormItem :error="formError.username">
<Input placeholder="帐号" v-model="form.username" @input="formError.username=''" >
<Icon type="ios-contact" slot="prepend" :size="iconSize"/>
</Input>

 </FormItem>
  <FormItem :error="formError.password">
<Input type="password" placeholder="密码" v-model="form.password" @input="formError.password=''">
<Icon type="md-lock" slot="prepend" :size="iconSize"/>
</Input>
 </FormItem>
   <FormItem  :error="formError.email">
<Input  placeholder="邮箱" v-model="form.email" @input="formError.email=''">
<Icon type="ios-mail" slot="prepend" :size="iconSize"/>
</Input>
 </FormItem>
   <FormItem  :error="formError.phone">
<Input  placeholder="手机" v-model="form.phone" @input="formError.phone=''">
<Icon type="md-phone-portrait" slot="prepend" :size="iconSize"/>
</Input>
 </FormItem>
  <FormItem :error="formError.verifiy">
<Input  placeholder="验证码" v-model="form.verifiy" @input="formError.verifiy=''"/>
</FormItem>
  <FormItem>
<img :src="verifiyCodeSrc" @click="getVerifiy" style="height:30px"/>
       </FormItem>
   <FormItem>
<Button long type="success" @click="register">注册</Button>
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
                form:{
                   username:'',
                   email:'',
                   phone:'',
                   password:'',
                    verifiy:''
                },
                formError:{
                    username:'',
                   email:'',
                   phone:'',
                   password:'' ,
                   verifiy:''
                },
                verifiyCodeSrc:"/api/verifiy.gif"
            }
        },
         methods:{
            getVerifiy(e){
                const verifiySrc = "/api/verifiy.gif"+'?'
                this.verifiyCodeSrc=verifiySrc+e.timeStamp
            },
            register(e){
                axios.post('api/register',this.form).then(res=>{
                 this.$router.push('/login')
                }).catch(err=>{
                    this.getVerifiy(e)
              const {data}=err.response
              //change object to array
              Object.keys(data).forEach(k=>{
                  this.formError[k]=data[k]
              })
                })
            }
        }
    }
</script>

<style >
.register{
    width: 320px;
    margin: 100px auto;
}
</style>