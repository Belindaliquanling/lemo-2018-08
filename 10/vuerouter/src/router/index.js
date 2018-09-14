import  Vue from 'vue';
import  VueRouter from 'vue-router';
import Home from '@/views/Home';
import News from '@/views/News';
import NewsList from '@/views/NewsList';
import Datail from '@/views/Datail';
import NotFound from '@/views/NotFound';
//use vue to regist the plugin
Vue.use(VueRouter)
// VueRouter(options)
//options :1mode ''路由 
// 2 routes [] 路由的匹配规则 匹配组件
export default new VueRouter({
    mode: 'history',//'hash',//hash is a default way
    routes:[
            {
         path:'/' ,
         component:Home//需要匹配的组件     
            },
            {
                path:'/news',
                component:News,
                redirect:'/news/list',//重定向 不加载当前组件 加载设置的组件
                
                children:[
                    // 给新闻页面配置子路由
                    {
                        path:'list',
                        component:NewsList,
                        alias:'/news' //别名 要显示的的别名不显示自己的路径 显示别名的路径
                    },
                    {
                        path:':id',//:id就是用来在$route的params对象里面获取对应的路径参数的key
                        component:Datail
                    }
                ]
                

            },
            {
                path:'/404',//定义一个错误页面
                component:NotFound
            },
            {
              path:'*',//是通配符 前面的路由规则不能匹配到 都可以匹配到
              redirect:'/404'  
            }

    ]
})
//谁的子路由就在谁的组件里面做切换