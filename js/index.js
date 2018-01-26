$(function () {
    space();
    $('.counter').countUp();
    service();
    choose();
    LimitNumber("new-detail",50);
    LimitNumber("detail",35)
    LimitNumber("description",50)
})

/*服务类型侧边导航*/
function service() {
    var service_li=$("#servie-item .service-title").find("li");
    var service_title=$("#servie-item .service-title");
    // service_li.on("hover",function () {
    //     alert($(this).index())
    // },function () {
    //
    // })
    var index;
    service_li.on("mouseenter",function () {
        console.log("滑过"+$(this).index())
        index=$(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(this).children(".img").children().attr("src","images/blue-"+index+".png")
        $(this).children(".service-list").show();
    })
    service_li.on("mouseleave",function () {
        console.log("滑出"+$(this).index())
        $(this).children(".img").children().attr("src","images/"+index+".png")
        $(this).children(".service-list").hide();
    })
    service_title.on("mouseleave",function () {
        $(this).children("li").removeClass("active");
    })
}

/*云空间*/
function space() {
    var space_wrap=hot_space.find(".space-wrap");
    var fron_title=hot_space.find(".fron-title")
    var front_img=hot_space.find('.fron-img')
    space_wrap.on("mouseenter",function () {
            $(this).addClass("active").siblings().removeClass("active");
            $(this).children().children(".fron-title").hide();
    })
    space_wrap.on("mouseleave",function () {
       $(this).removeClass("active")
        $(this).children(fron_title).show();
        $(this).children().children(".fron-title").show();
    })
}
/*精选资讯*/
function choose() {
    var problem_wrap=$("#problem-wrap");
    var problem_list=problem_wrap.find(".problem-list");
    var right_title=$(".new-right").find(".title li");
    right_title.hover(function () {
        var index=$(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        problem_list.eq(index).show().siblings().hide();
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