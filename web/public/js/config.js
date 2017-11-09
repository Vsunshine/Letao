


// 模块化：引入外部的插件和框架
require.config({
    baseUrl: '/public',
    // 最后不用加.js, require会自动帮我们加上
    paths:{
        jquery: 'assets/jquery/jquery.min',
        echarts:'assets/echarts/echarts.min',
        template: 'assets/artTemplate/template-web',
        uploadify: 'assets/uploadify/jquery.uploadify.min',
    },

    //如果第三方类库不支持模块化，我们使用shim来让他模块化
    shim:{
        uploadify:{
            //通过exports来让非模块化的属性和方法公开（如果需要公开的话），相当于 return;
            // exports:

            //通过deps可以依赖其他模块
            deps:['jquery']
        }
    }
})