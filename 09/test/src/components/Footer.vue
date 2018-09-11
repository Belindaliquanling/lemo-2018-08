<template>
    <div class="footer">
        footer:{{num}}
     <footer>
        <h3>底部</h3>
        <input  v-focus:click.stop.f1="1+1" type="text"/>
        <button v-ev:click.stop.prevent="click">点击</button>
    </footer>
    </div>
</template>

<script>
//在自定义的每个钩子函数里都会有以下几个参数
// 1.el 2.binding 3.vnode 4.oldVnode
    export default {
        directives:{
            //directives 自定义指令
            focus:{
                //v-focus
                bind(el,binding,vnode,oldVnode){
                    //v-focus绑定到元素或组件上是触发
             console.log('bind')
             //html原生元素对象
            //   el.focus()指令所在的元素还没有插入到dom中 所以元素的一些动态操作是不能实现的
            //  el.style.background='red';
            // console.log(binding)
                },
                inserted(el,binding,vnode,oldVnode){
                    //当指令所在的元素插入到dom时 触发这个钩子
                 console.log('inserted')
                 el.focus()
                },
                update(el,binding,vnode,oldVnode) {
                     console.log('updated')
                }
            },
            ev:{
                bind(el,binding){

                // console.log(binding)
                if(binding.arg){
                    el.addEventListener(binding.arg,(e)=>{
                        e=e ||event
                        if(binding.modifiers.stop){
                           e.stopPropagation();
                        }
                        if(binding.modifiers.prevent){
                            e.preventDefault();
                            
                        }
                        
                        binding.value(e)
                    })
                  
                    
                }
                },
                inserted(){

                }
            },
           
            },
             methods:{
                click(e){
                console.log(e)
                }
        }
    }
</script>

<style >

</style>