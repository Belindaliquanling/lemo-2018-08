<template>
    <div class="button">
   <button type="button" class="btn" :style="{color:color}">
       <slot/>
   </button>
    </div>
</template>

<script>
    export default {
        props:{
            color:String
        }
    }
</script>

<style scoped>
.btn{
    width: 100px;
    height: 100px;
}
</style>