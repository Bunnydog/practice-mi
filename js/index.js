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

    //购物车下拉效果
    $(".shopping-cart").hover(function () {
        // over
        $(".shopping-list").stop().slideDown(200);
    }, function () {
        // out
        $(".shopping-list").stop().slideUp(200);
    }
);
})