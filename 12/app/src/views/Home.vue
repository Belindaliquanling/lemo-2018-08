<template>
      <Layout class="page">
    
        <Layout>
            <Sider hide-trigger>
                   <Table :columns="columns1" :data="data1"></Table>
              <HomeMenu/>
            </Sider>
            <Content class="content">
               <router-view/>
            </Content>
        </Layout>
        <Footer class="footer">Footer</Footer>
    </Layout>
</template>

<script>
  import HomeMenu from '@/components/HomeMenu'
    export default {
      components:{
          HomeMenu
      }
    }
</script>

<style >
.page{
    height: 100%;
}
.page .header{
    background-color: #fff;
}
.page .footer{
    background-color: #fff;
}
.page .content{
    padding: 10px;
}
</style>