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
        page4_draw_chart(swiper.activeIndex);
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

function page4_draw_chart(index)
{
    if(index == 3)
    {
        drawChart(4);
    }
    else
    {
        var i;
        var cav = document.getElementById("page4_top_left");
        var children = cav.childNodes;
        for(i=0;i<children.length;i++){
            cav.removeChild(children[i]);
        }
    }
}

function drawChart(x) {
    var ctype;
    switch(x)
    {
        case 1:
            ctype="column";
            break;
        case 2:
            ctype="spline";
            break;
        case 3:
            ctype="doughnut";
            break;
        case 4:
            ctype="pie";
            break;
    }

    var chart = new CanvasJS.Chart("page4_top_left", {
        theme: "theme2",//theme1
        backgroundColor: "rgba(34,34,34,0)",
        title:{
            text: "Ability"
        },
        animationEnabled: true,   // change to true
        data: [
            {
                // Change type to "bar", "splineArea", "area", "spline", "pie",etc.
                type: ctype,
                //color: "rgba(2,34,21,.5)",
                dataPoints: [
                    { color:"rgba(28,34,21,1)", label: "attack",  y: 10  },
                    { color:"rgba(1,40,120,1)", label: "defence", y: 15},
                    { color:"rgba(21,3,77,1)", label: "speed", y: 25  },
                    { color:"rgba(200,88,81,1)", label: "power",  y: 30  },
                    { color:"rgba(5,123,164,1)", label: "magic",  y: 28  }
                ]
            }
        ]
    });
    chart.render();

}