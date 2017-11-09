define(['jquery', 'template'],function($, template){

        $.ajax({
            url:'/api/user/queryUser',
            type:'get',
            data:{page:1, pageSize:10},
            success:function (info){
                console.log(info);

                var html = template('users',info);
                $('tbody').html(html);
            }
        })

        //事件捕获
        $('table').on('click','.btn',function (){
            var _this = $(this);
            var td = $(this).parent();
            //获取用户的id
            var id = td.attr('data-id');
            //获取用户的是否禁用的状态码
            var status = td.attr('data-status');
            //切换状态码
            status = Math.abs(status - 1);
            $.ajax({
                url: '/api/user/updateUser',
                type: 'post',
                data: {id: id, isDelete: status},
                success:function (info){ 
                    // console.log(info)
                // DOM状态
                if(status == 1) {
                    _this.text('启 用');

                    td.prev().text('是');
                } else {
                    _this.text('禁 用');

                    td.prev().text('否');
                }

                // 状态
                td.attr('data-status', status);
                _this.toggleClass('btn-info btn-warning');
                }
            })
        })
})