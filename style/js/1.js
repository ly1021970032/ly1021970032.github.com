$(function() {
    $(".skill li").hover(function() {
        $(this).children(".skill-all").stop().fadeIn(300)
    }, function() {
        $(this).children(".skill-all").stop().fadeOut(300)
    });
    $(".tishi").hover(function() {
        $(".tip2").stop().animate({
            "top": "10px",
            "opacity": "1"
        }, 300)
    }, function() {
        $(".tip2").stop().animate({
            "top": "40px",
            "opacity": "0"
        }, 300)
    });

    function fangDa(par1, par2) {
        $(par1).click(function(event) {
            $(par2).fadeIn();
            $("body,html").css("overflow", "hidden")
        })
    }
    fangDa(".fangDa", ".click-out1");
    fangDa(".fangDa2", ".click-out2");
    fangDa(".fangDa3", ".click-out3");
    fangDa(".fangDa4", ".click-out4");
    fangDa(".fangDa5", ".click-out5");
    fangDa(".fangDa6", ".click-out6");
    $(".close").click(function(event) {
        $(".closeAll").fadeOut();
        $("body,html").css("overflow", "auto")
    });
    $(".wangye .wang li,.mian2 .xiangmu ul li span").hover(function() {
        $(this).css({
            "-webkit-animation": "fand 0.4s forwards",
            "-moz-animation": "fand 0.4s forwards",
            "-o-animation": "fand 0.4s forwards",
            "-ms-animation": "fand 0.4s forwards",
            "animation": "fand 0.4s forwards"
        })
    }, function() {
        $(this).css({
            "-webkit-animation": "fand2 0.4s forwards",
            "-moz-animation": "fand2 0.4s forwards",
            "-ms-animation": "fand2 0.4s forwards",
            "-o-animation": "fand2 0.4s forwards",
            "animation": "fand2 0.4s forwards"
        })
    });
    var num = 0;

    function right(par1, par2) {
        $(par1).click(function(event) {
            num++;
            var zhi = num * (-100);
            $(".out-pic").css("left", zhi + "%");
            if (zhi == -par2) {
                $(".out-pic").css("left", "0px");
                num = 0
            }
        })
    }

    function left(par1, par2, par3) {
        $(par1).click(function(event) {
            num--;
            var zhi = num * (-100);
            $(".out-pic").css("left", zhi + "%");
            if (zhi == 100) {
                $(".out-pic").css("left", par3 + "%");
                num = par2
            }
        })
    }
    left(".left1", 5, -500);
    left(".left2", 4, -400);
    left(".left3", 8, -800);
    left(".left4", 5, -500);
    left(".left5", 4, -400);
    left(".left6", 3, -300);
    right(".right1", 600);
    right(".right2", 500);
    right(".right3", 900);
    right(".right4", 600);
    right(".right5", 500);
    right(".right6", 400);

    function out(par1, par2) {
        $(par1).click(function(event) {
            $(par2).fadeIn();
            $("body,html").css("overflow", "hidden")
        })
    }
    out(".pic1", ".wclick1");
    out(".pic2", ".wclick2");
    out(".pic3", ".wclick3");
    out(".pic4", ".wclick4");
    out(".pic5", ".wclick5");
    out(".pic6", ".wclick6");
    var num01 = 0;
    setInterval(function() {
        num01++;
        if (num01 == 5) {
            num01 = 0
        }
        var zhi = num01 * (-100);
        $(".gun-wz").animate({
            "top": zhi + "%"
        }, 500)
    }, 4000);
    $(".nav1,.nav01").click(function() {
        $(".nav01").addClass("current");
        $(".nav01").siblings().removeClass("current");
        $("body,html").animate({
            scrollTop: 0
        }, 500)
    });
    $(".nav2,.nav02").click(function() {
        $(".nav02").addClass("current");
        $(".nav02").siblings().removeClass("current");
        $("body,html").animate({
            scrollTop: 685
        }, 500)
    });
    $(".nav3,.nav03").click(function() {
        $(".nav03").addClass("current");
        $(".nav03").siblings().removeClass("current");
        $("body,html").animate({
            scrollTop: 1665
        }, 900)
    });
    $(".nav4,.nav04").click(function() {
        $(".nav04").addClass("current");
        $(".nav04").siblings().removeClass("current");
        $("body,html").animate({
            scrollTop: 2455
        }, 1000)
    });
    $(".nav5,.nav05").click(function() {
        $(".nav05").addClass("current");
        $(".nav05").siblings().removeClass("current");
        $("body,html").animate({
            scrollTop: 3275
        }, 1000)
    })
});
$(function() {
    $(window).scroll(function(e) {
        if ($(window).scrollTop() > $(window).height()) {
            $(".box").show()
        } else {
            $(".box").hide()
        }
    });
    $(".box").click(function(e) {
        $("html,body").animate({
            "scrollTop": "0px"
        }, 500)
    });
    $(window).scroll(function(e) {
        if ($(window).scrollTop() > 105) {
            $(".slide").slideDown()
        } else {
            $(".slide").slideUp()
        } if ($(window).scrollTop() >= 685 && $(window).scrollTop() < 1665) {
            $(".nav02").addClass("current");
            $(".nav02").siblings().removeClass("current")
        } else {
            if ($(window).scrollTop() >= 1665 && $(window).scrollTop() < 2455) {
                $(".nav03").addClass("current");
                $(".nav03").siblings().removeClass("current")
            } else {
                if ($(window).scrollTop() >= 2455 && $(window).scrollTop() < 3000) {
                    $(".nav04").addClass("current");
                    $(".nav04").siblings().removeClass("current")
                } else {
                    if ($(window).scrollTop() >= 2455) {
                        $(".nav05").addClass("current");
                        $(".nav05").siblings().removeClass("current")
                    } else {
                        $(".nav01").addClass("current");
                        $(".nav01").siblings().removeClass("current")
                    }
                }
            }
        }
    })
});