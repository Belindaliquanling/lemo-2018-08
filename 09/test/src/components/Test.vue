<template>
    <div @click="$emit('click')">
        {{title}}
        {{num}}
       <slot></slot>
    </div>
</template>

<script>
    export default {
        mounted(){
       console.log(this.$data)
        },
        props:{
            title:{
                type:String,
                required:true
            },
            num:{type:Number,
                 required:true
            }
        },
        data(){
            return {
               hehe: '呵呵'
            }
        }

    }
</script>

<style scoped>

</style>