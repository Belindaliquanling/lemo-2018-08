// webpack 运行是在node里运行 es6的语法是不能支持的
const path = require('path')
const {VueLoaderPlugin}=require('vue-loader')
const HtmlWebpackPlugin=require('html-webpack-plugin')


module.exports ={
   // entry :  './src/main.js', // 程序打包的入口
        entry:{//多文件编译是对象的格式 单文件编译是字符串和数组
         app:'./src/main.js',
         index:'./src/index.js'
        },    
    output:{
        // 打包好的文件怎么输出
         path:path.resolve('dist'), //配置输出的具体目录（必须是绝对路径）
         filename:'[name].js',//定义好打包好的文件名称
         library:'lemon', //暴露全局变量方法 在浏览器里
         libraryTarget:'umd2'//umd通用模块

    },
    module:{
    //  模块处理
    rules:[//模块处理规则
        

        {
            test: /\.css$/,//正则表达式
            loader: ['style-loader','css-loader']
        },
        {
            test:/\.less$/,
            loader:['style-loader','css-loader','less-loader'],
            // include:[]
            exclude:[path.resolve('src','style.less')]
        },
        {
            test:/\.vue$/,
            loader:'vue-loader'
        }
       
    ]
    },
    plugins:
    [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
         template:path.resolve('dist','index.html')
        })
    ],
    resolve:{
        //解析模块的请求选项
        extensions:['.vue','.js'],//自动匹配文件后缀规则
        alias:{
           'vue':'vue/dist/vue.esm', //给vue模块添加别名
           '@':path.resolve('src','assets')
        }
    },
     
    devServer:{
        //webpack-dev-server配置
        proxy:{
            contentBase:path.resolve('dist'),//生成后的文件所在的目录
            compress:true,//gzip压缩
            // host:'127.0.0.1',
            port:4000,//端口号
            index:'index.html',//http服务器默认加载的html文件
            open:true //在webpack-dev-server启动时默认打开浏览器
        }
    },
    mode:'production'
}
//development 开发模式 会保留注释 控制台输出
//production 生产模式 不会保留任何注释 而且 控制台输出也会被清除掉