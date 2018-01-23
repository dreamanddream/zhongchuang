$(function () {
    space();
})
/*云空间*/
function space() {
    var hot_space=$("#hot-space");
    var front_img=hot_space.find('.fron-img')
    var flag=1;
    if(flag==1){
    front_img.on("mouseenter",function () {

            $(this).next().animate({"bottom":"0"});
            flag=0;


    })
    }
    front_img.on("mouseleave",function () {
        if(flag==0){
            $(this).next().animate({"bottom":"-215px"});
            flag=1;
        }

    })
}