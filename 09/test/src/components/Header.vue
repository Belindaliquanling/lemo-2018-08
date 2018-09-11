<template>
    <div class="header">
<header>

        <h1>
            <img src="../assets/logo.png"  >
            <input type="text" v-ff='title'>
            <input type="text" v-model="title">
            <menu >
            <a href="#">{{title}}</a>
            <a href="#">关于</a>
             <a href="#">相关</a>
             <a href="#">搜索</a>
            </menu>
        </h1>
    </header>
    </div>
</template>

<script>
    export default {
        watch:{
            title(v){
               console.log(v)
            }
        },
        data(){
            return{
                title:'首页'
            }
        }
    }
</script>

<style >
.header{
    height: 50px;
    display: flex;
}
</style>