define(['jquery', 'template','./utils', 'uploadify'],function($, template){

    $('form').on({
        'submit':function (){
            var _this = $(this);
            $.ajax({
                url:'/api/product/addProduct',
                data: _this.serialize(),
                type:'post',
                success:function (info){
                    if(info.success){
                        location.href = '/goods_list.php';
                    }
                }
            })
            return false;
        }
    })

    // 插件图片预览上传
    $('#upfile').uploadify({
        //提示文字为 空
        buttonText:'',
        // 按钮宽高
        width: 120,
        height: 120,
        // name属性
        fileObjName:'pic1',
        //自定义上传进度天样式
        itemTemplate: '<span></span>',
        // 上传flash
        swf: '/public/assets/uploadify/uploadify.swf',
        // 文件长传地址
        uploader: '/api/product/addProductPic',
        onUploadSuccess:function (file, data){
            // console.log(data)
            var res = JSON.parse(data);
            // 实现预览效果
            $('.preview img').attr('src', 'http://localhost:3000' + res.picAddr);

            // 将图片上传地址放到表单中等待提交
            $('input[name="pic"]').val(res.picAddr);
        }
    })


   //列表模板
   $.ajax({
       url:'/api/category/querySecondCategoryPaging',
       type:'get',
       data:{page:1, pageSize:100},
       success:function (info){
            var list = template('lists',info);
            $('#liebiao').html(list);
       }
   })
   
    
})