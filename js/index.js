$(function () {  

    // 下载app悬浮下拉效果
    $(".download-app").hover(function () {
            // over
            $(".qrcode").stop().slideDown(200);
        }, function () {
            // out
            $(".qrcode").stop().slideUp(200);
        }
    );

})