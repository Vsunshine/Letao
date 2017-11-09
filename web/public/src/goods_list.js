define(['jquery', 'template', './utils'], function ($, template) {
    //分页显示

    //每页的数量
    var size = 2;

    //用正则取到url中的page
    var reg = /\?[a-zA-Z0-9]+=(\d+)/;
    var search = location.search || '';
    //当前页
    var page = reg.exec(search) && reg.exec(search)[1];
    page = page || 1;

    $.ajax({
        url: '/api/product/queryProductDetailList',
        type: 'get',
        data:{page:page, pageSize:size},
        success: function (info) {
            //分页
            console.log(info);
            //总条数
            var num = info.total;
            //总页数
            var yeshu = Math.ceil(num / size);
            //翻页模板
            var fanye = template('fanye', {
                yeshu: yeshu,
                page:page
            })

            //商品价格模板
            var spjg = template('spjg', info);
            $('.goods').html(spjg);
            $('#ye').html(fanye);
        }
    })

})