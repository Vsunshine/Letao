


// 模块化：引入外部的插件和框架
require.config({
    baseUrl: '/public',
    // 最后不用加.js, require会自动帮我们加上
    paths:{
        jquery: 'assets/jquery/jquery.min',
        echarts:'assets/echarts/echarts.min',
    }
})