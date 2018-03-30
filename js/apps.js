$(function () {
    var index = 0;
    var time = null;
    $(".phone-con img").fadeOut();
    $(".phone-con img:first").addClass("current").fadeIn();
    $(".prev").click(function () {
        index--;
        if (index < 0) {
            index = 2;
        }
        slider();
    })

    $(".next").click(function () {
        index++;
        if (index > 2) {
            index = 0;
        }
        slider();

    })
    autoplay();
    $(".con-right").mouseover(function () {
        clearInterval(time);
    }
    )
    $(".con-right").mouseout(function () {
        autoplay();
    }
    )
    function slider() {
        $(".phone-con img").removeClass("current");
        $(".phone-con img").eq(index).addClass("current");
        $(".phone-con img").fadeOut();
        $(".phone-con img").eq(index).fadeIn();
    }
    function autoplay() {
        clearInterval(time);
        time = setInterval(function () {
            index++;
            if (index > 2) {
                index = 0;
            }
            slider();
        }, 3000)
    }

});
