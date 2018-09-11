<template>
    <div class="page-home">
        {{title}}
    <Header/>
   
    <main>
        <h2>主体</h2>
    </main>
    <Footer/>
    </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import test from '../mixins/test'
    export default {
        mixins:[test],
        components:{
            Header,
            Footer
        }
    }
</script>

<style >

</style>