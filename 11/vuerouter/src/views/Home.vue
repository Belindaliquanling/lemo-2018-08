<template>
<el-container class="page">
  <el-aside width="200px">

       <el-menu :default-active="1" 
       background-color="#ccc"
       text-color="#fff"
       style="height:100%">
       <div class="logo">LOGO</div>
        <el-menu-item :index="1">首页</el-menu-item>
         <el-menu-item :index="2">数据中心</el-menu-item>
          <el-menu-item :index="3">管理中心</el-menu-item>  
         <el-submenu>
             <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">导航一</span>
    </template>
  <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>

         </el-submenu>
    </el-menu>
  </el-aside>
  <el-container>
    <el-header>
    <el-menu mode="horizontal">
        <el-menu-item index="1">首页</el-menu-item>
         <el-menu-item index="2">数据中心</el-menu-item>
          <el-menu-item index="4">管理中心</el-menu-item>  
          
    </el-menu>
    </el-header>
    <el-main>
     main
    </el-main>
  </el-container>
   <el-button @click="$router.back()">返回</el-button>
</el-container>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" >
.page{
 .logo {width: 100%;
  height: 50px;
  color:#fff;
  line-height:50px;
  padding: 0 20px;
  background-color:green;}
    width:100%;
    height: 100%;
  .el-aside{

  }
  .el-header{
   padding:0;

  }
}
</style>