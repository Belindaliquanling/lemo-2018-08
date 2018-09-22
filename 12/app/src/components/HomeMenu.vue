<template>
  <Menu @on-select="select" width="200" theme="dark" active-name="/users">
                 <MenuItem name="/users">
                  用户管理
                 </MenuItem>
                  <Submenu name="2">
                    <template slot="title">
                       系统设置
                    </template>
                    <MenuItem name="/setting">个人设置</MenuItem>
                    <MenuItem name="2-2">后台设置</MenuItem>
                </Submenu>
              
             </Menu>
</template>

<script>
    export default {
        methods:{
            select(name){
                if(name)this.$router.push(name)
                       }
        }
    }
</script>

<style >

</style>