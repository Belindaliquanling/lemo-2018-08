// export 就是一个按需导入的语法

export function Fna(){}
export function Fnb(){}
// 导出test.js文件中的所有语法
// 顺带导出test.js文件中的所有成员
export * from './test'

 
// 如果要想提供默认的
export default {
    Fnb
}