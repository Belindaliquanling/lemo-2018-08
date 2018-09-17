<template>
<el-container class="page">
<div class="regist">
<h1>注册</h1>
<el-form label-width="100px">
    <el-form-item >
<el-input type="password">
<template slot="prepend">
    <i class="el-icon-mobile-phone
"></i>
</template>
</el-input>

</el-form-item>
    <el-form-item >
<el-input type="password">
<template slot="prepend">
    <i class="el-icon-message"></i>
</template>
</el-input>

</el-form-item>
<el-form-item label="帐号">
<el-input type="text">

</el-input>

</el-form-item>
<el-form-item label="密码">
<el-input type="password">

</el-input>

</el-form-item>
</el-form-item>
<el-form-item label="确认密码">
<el-input type="password">

</el-input>

</el-form-item>
<el-form-item>
    <router-link to="/login">已有帐号，返回至登录页面</router-link>
</el-form-item>
 <el-button @click="click" type="primary" style="width:100%">登录</el-button>
</el-form>

</div>

</el-container>
</template>

<script>
    export default {
        methods:{
            click(){
                // this.$router.back()
                // this.$router.go(-1)
                this.$router.replace('/')
            }
        }
    }
</script>

<style lang="less" >
.regist{
    width: 320px;
   height: auto;
   margin: 100px auto;
   border: 1px solid red;
   h1{
       text-align: center;
   }
}
</style>