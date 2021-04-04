//  自己写的js文件  自定义

$(function() {
    $(window).on("resize",function(){
        // 获取窗口的宽度
        let clientW = $(window).width();
        // console.log(clientW);

        // 设置临界值
        let isShowBigImge = clientW >= 800;
        // 获取所有item
        let $allItems = $("#lk_carousel .item");
        // console.log($allItems);
        // 遍历
        $allItems.each(function(index,item) {
            //  取出图片的路径
            let src = isShowBigImge ? $(item).data("lg-img") : $(item).data("sm-img");                                        
            let imgUrl = 'url("' + src + '")';

            //  设置背景
            $(item).css({
                backgroundImage: imgUrl
            });

            //  设置img 标签
            if(!isShowBigImge) {
                let $img = "<img src='" +src + "'>";
                $(item).empty().append($img);
            }else {
                $(item).empty();
            }

        });
    });
    $(window).trigger("resize");
   

    //  工具提示
    $('[data-toggle="tooltip"]').tooltip();

    // 动态处理宽度
//     $(window).on("resize",function(){
//        let $ul = $("#lk_product .nav");
//        let $allList = $("[role='presentation']",$ul);

//     //     遍历
//     let totalW = 0;
//     $allList.each(function(index, item){
//         totalW += $(item).width();
//     });

//     let parentW = $ul.parent().width();

//     //  设置宽度
//    if(totalW > parentW) {
//     $ul.css({
//         width:totalW + "px"
//     });
//    }else {
//        $ul.removeAttr("style");
//    }
//  });

//  导航处理
let allList = $("#lk_nav li");
$(allList[2]).on("click",function(){
    $("html,body").animate({scrollTop:$("#lk_hot").offset().top},1000);
})

    $(window).trigger("resize");
});
