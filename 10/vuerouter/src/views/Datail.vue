<template>
    <div>
   <h1>新闻详情页面</h1>
   {{$route.params.id}}
    </div>
</template>

<script>
    export default {
        mounted(){
            console.log(this.$route)
            //在组件的实例中可以获取到路由的参数
            //也可以使路由来跳转
            //this.route 对象 这个对象包含了路由的所有信息
            //this.router 对象 这个对象里面包含了路由的所有跳转方法

            // 通过路由对象拿到路径参数之后，我就可以根据这个路径参数向后台服务器请求对应的数据了
        }
        }
    
</script>

<style >

</style>