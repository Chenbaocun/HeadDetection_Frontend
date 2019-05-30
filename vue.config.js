//这个是自己加的
module.exports = {
 // 基本路径
//publicPath: './',
 // 输出文件目录
outputDir: 'dist',
assetsDir:'static',//这个是相对于outputDir的，所以会出现在dist/static下

//  设置代理解决本地测试访问服务器的跨域问题
devServer:{
 proxy:{
 '/api/':{
  target:"http://39.96.169.188",//api映射地址
  secure:false,//https接口设置为ture
  changeOrigin:true,//是否跨域
  // ws:true,
  pathRewrite:{
   '^/api':''
  }
 },
    }
}
};