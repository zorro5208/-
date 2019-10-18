$(function () {
     apiAjax = function(type, url, params, json,beforeSend, callback ) {
        var host = "http://lxydata.com/lxy_api"  //测试环境
        // var host = "http://192.168.0.104:8889/platform-api"//本地环境
        $.ajax({
            type: type || "post",
            url: host + url,
            data: params,
            dataType: json || "html",
            beforeSend:beforeSend,//设置头部
            success: function (res) {
                if (callback) {
                    callback(res)
                }
            },
            error: function (res) {
                console.log('无法与服务器连接');
            }
        })
    };

})