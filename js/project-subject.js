
$(function () {
	cloud();
    LimitNumber("description",150);
})
function cloud() {
    var cloud=$("#cloud");
    var cloud_list=cloud.find(".cloud-list");
    var front_img=cloud.find('.fron-img')
    cloud_list.on("mouseenter",function () {
        $(this).addClass("active").siblings().removeClass("active");
    })

    cloud_list.on("mouseleave",function () {
        $(this).removeClass("active")
    })
}
/*限制字数*/
function LimitNumber(className,num) {
    var cla=$("."+className);
    //alert(cla.length)
    cla.each(function () {
        var str = $(this).html();
        var new_str;
        new_str = str.substring(0,num) + '...' ;
        $(this).html(new_str)
    })

}