<template>
    <div>
      <img :src="img" >
    </div>
</template>

<script>
import Img from '../assets/logo.png'
    export default {
        data(){
            return {
                // img:require('../assets/logo.png')
                img:Img

            }
        }
    }
</script>

<style scoped>

</style>