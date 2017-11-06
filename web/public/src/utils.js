
//因为每个页面都判断是否登录功能和退出功能，所以这里把这个设置成模块

define(['jquery'], function ($) {

    // 检查是否登录
    $.ajax({
        url: '/api/employee/checkRootLogin',
        type: 'get',
        success: function (info) {
            if (info.error) {
               location.href = '/login.html';
            }
        }
    })


    //退出功能
    $('.esc').on({
        'click': function () {
            $.ajax({
                url: '/api/employee/employeeLogout',
                type: 'get',
                success: function (info) {
                    if (info.success) {
                        location.href = '/login.html';
                    }
                }
            })
        }
    })
})