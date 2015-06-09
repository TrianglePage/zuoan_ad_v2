/**
 * Created by George on 2015/5/26.
 */
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    mousewheelControl: true,
    watchSlidesProgress: true,
    loop: false,
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper);
        swiperAnimate(swiper);
        building_animate(swiper.activeIndex);
    },
    onTransitionEnd: function(swiper){
        //     alert("df");
        swiperAnimate(swiper);
        building_animate(swiper.activeIndex);
        page2_white_bk_animation(swiper.activeIndex);
    }
})

function building_animate(index)
{
    if(index == 0)
    {
        setTimeout(function(){
        $("#page_1_blue").css({
            "transition-property":"left 2s linear 0s",
            "-webkit-transition":"left 2s linear 0s",
            "-moz-transition":"left 2s linear 0s",
            "-o-transition":"left 2s linear 0s"});
            document.getElementById("page_1_blue").style.left = "100%";
        }, 500);
    }
    else
    {
        $("#page_1_blue").css({
            "transition-property":"left 0s linear 0s",
            "-webkit-transition":"left 0s linear 0s",
            "-moz-transition":"left 0s linear 0s",
            "-o-transition":"left 0s linear 0s"});
        document.getElementById("page_1_blue").style.left = "0";
    }
};

function page2_white_bk_animation(index)
{
    if(index == 1)
    {
        setTimeout(function(){
        $("#page2_white_bk").css({
            "left": "26%",
            "width": "60%",
            "transition-property":"width 0.5s linear 0s, left 0.5s linear 0s",
            "-webkit-transition":"width 0.5s linear 0s, left 0.5s linear 0s",
            "-moz-transition":"width 0.5s linear 0s, left 0.5s linear 0s",
            "-o-transition":"width 0.5s linear 0s, left 0.5s linear 0s"});
        }, 4500);

        setTimeout(function(){
            $("#page2_white_flash").css({
                "left": "86%",
                "width":"10px",
                "transition-property":"left 0.5s linear 0s",
                "-webkit-transition":"left 0.5s linear 0s",
                "-moz-transition":"left 0.5s linear 0s",
                "-o-transition":"left 0.5s linear 0s"});
        }, 5500);

        setTimeout(function(){
        $("#page2_white_flash").css({
            "width":"0px"});
        }, 6000);
    }
    else
    {
        $("#page2_white_bk").css({
            "left": "56%",
            "width": "0%",
            "transition-property":"width 0s linear 0s, left 0s linear 0s",
            "-webkit-transition":"width 0s linear 0s, left 0s linear 0s",
            "-moz-transition":"width 0s linear 0s, left 0s linear 0s",
            "-o-transition":"width 0s linear 0s, left 0s linear 0s"});

        setTimeout(function(){
            $("#page2_white_flash").css({
                "left": "26%",
                "width":"0",
                "transition-property":"left 0s linear 0s",
                "-webkit-transition":"left 0s linear 0s",
                "-moz-transition":"left 0s linear 0s",
                "-o-transition":"left 0s linear 0s"});
        }, 1000);
    }
}