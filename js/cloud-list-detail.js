// $(function () {
//     scroll.init();
// })
// var scroll={
//     init:function () {
//         var movetop=0;
//         var arr=[];
//         var title_list=$(".detail-item-title").find("li");
//         var detail_list=$(".detail-list .list").find("li");
//         // alert(detail_list.length)
//         for(var i=0,ss=detail_list.length;i<ss;i++){
//             arr[i]=detail_list.eq(i).offset().top;
//         }
//         console.log(arr)
//         scrollMove(title_list,arr);
//     }
// }
//
// function scrollMove(elem,arr) {
//     var header_height=$("#header").height();
//     var detail_title_height=$(".detail-wrap").height();
//     var detail_item_height=$(".detail-item-wrap").height();
//     var detail_list=$(".detail-list");
//     var total_height=parseInt(header_height)+parseInt(detail_title_height)+parseInt(detail_item_height);
//     // alert(total_height)
//     elem.each(function (i) {
//         $(this).on("click",function () {
//             $(this).addClass("active").siblings().removeClass("active");
//             $("body,html").animate({
//                 scrollTop:arr[i]-total_height
//             })
//         })
//
//     })
// }
$(function () {
    show();
})
function show() {
    var title_list=$(".detail-item-title").find("li");
    var detail_list=$(".detail-list .list").find("li");
    title_list.on("click",function () {
        var index=$(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        detail_list.eq(index).show().siblings().hide();
    })
}

