//轮播图
$(function () {
    var index = 0;
    var time = null;
    $(".slider-wrapper .slider-item").fadeOut();
    $(".slider-wrapper .slider-item:first").fadeIn();
    $(".prev").click(function () {
        index--;
        if (index < 0) {
            index = 3;
        }
        slider();
    })

    $(".next").click(function () {
        index++;
        if (index > 3) {
            index = 0;
        }
        slider();

    })

    $(".slider-dot a").click(function () {
        if (index != $(this).index()) {
            index = $(this).index();
            slider();
        }
    })
    autoplay();
    $(".slider-container").mouseover(function () {
        clearInterval(time);
        $(".prev").fadeIn();
        $(".next").fadeIn();
    }
    )
    $(".slider-container").mouseout(function () {
        autoplay();
        $(".prev").fadeOut();
        $(".next").fadeOut();
    }
    )
    function slider() {
        $(".slider-dot a").removeClass("current");
        $(".slider-dot a").eq(index).addClass("current");
        $(".slider-wrapper .slider-item").fadeOut();
        $(".slider-wrapper .slider-item").eq(index).fadeIn();
    }
    function autoplay() {
        clearInterval(time);
        time = setInterval(function () {
            index++;
            if (index > 3) {
                index = 0;
            }
            slider();
        }, 3000)
    }

});
