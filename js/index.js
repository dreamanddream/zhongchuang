$(function () {
    space();
})
/*云空间*/
function space() {
    var hot_space=$("#hot-space ").find(".space-wrap");
    hot_space.on("mouseover",function () {
        $(this).addClass("active").siblings().removeClass("active");
    })

    hot_space.on("mouseout",function () {
        $(this).removeClass("active");

    })
}