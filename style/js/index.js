function rnd(n,m){
    return parseInt(Math.random()*(m-n)+n);
}
window.onload=function(){
    var omessage = document.getElementById('message');
    var obn = document.getElementById('on');
    var oFirst = document.getElementById('first');
    var obtn = document.getElementById('btn');
    var owl = document.getElementById('wl');
    var oxmz = document.getElementById('xmz');
    var aLi = owl.children;
    var pos = [];
    var iNow = 0;
    //first
    aLi[0].onclick=function(){
        window.open('zhengzhan/oppo/oppo手机官网.html');
    }
    aLi[1].onclick=function(){
        window.open('zhengzhan/小米/小米网.html');
    }
    aLi[2].onclick=function(){
        window.open('zhengzhan/蒙娜丽莎/蒙娜丽莎.html');
    }
    aLi[3].onclick=function(){
        window.open('zhengzhan/美丽说/美丽说官网.html');
    }

    for (var i = 0; i < aLi.length; i++) {
        var left = aLi[i].offsetLeft;
        var top = aLi[i].offsetTop;
        pos.push({l:left,t:top});
        aLi[i].style.left=left+'px';
        aLi[i].style.top=top+'px';
    }
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].style.position='absolute';
    }
    obtn.onclick=function(){
        var n = 0;
        var timer = null;
        timer=setInterval(function(){
            move(aLi[n],{left:0,top:0,width:0,left:0,opacity:0,},{time:100,
                fn:function(){
                    if (n==aLi.length-1) {
                        xmz();
                    }
                }
            })
            n++;
            if (n==aLi.length) {
                clearInterval(timer);
            }
        },100)
    }
    function xmz(){
        for (var i = 0; i < aLi.length; i++) {
            aLi[i].style.background='rgb('+rnd(0,255)+','+rnd(0,255)+','+rnd(0,255)+')';
        }
        var m = aLi.length-1;
        var timer = null;
        timer = setInterval(function(){
            var lt = pos[m].l;
            var tp = pos[m].t;
            move(aLi[m],{left:lt,top:tp,width:100,height:100,opacity:1},{time:1000})
            m--;
            if (m==-1) {
                clearInterval(timer);
            }
        },100)
    }

    //作品展示
    var obox1 = document.getElementById('box1');
    var oul1 = obox1.children[0];
    var oli1 = oul1.children;
    var omg = obox1.getElementsByTagName('img');
    var divC = obox1.offsetWidth/2;
    var arr2 = ['苹果桌面','圆周运动','图片放大','无缝运动','分布显示','3D轮转','拖拽回放'];

    var arr3 = ['zuopin/apple.html','zuopin/work2.html','zuopin/tupianfangda.html','zuopin/work4.html','zuopin/fenkuaiyund.html','zuopin/3Dlunbotu.html','zuopin/huifang.html'];
    for (var i = 0; i < oli1.length; i++) {
        var bspan = document.createElement('span');
        oli1[i].appendChild(bspan);
    };
    for (var i = 0; i < oli1.length; i++) {

        oli1[i].children[1].innerHTML=arr2[i];

        ;(function(index){
            oli1[i].ondblclick=function(){
                window.open(arr3[index]);
            }
        })(i);
    }

    oul1.onmousedown=function(ev){
        var et = ev || event;
        var disX = et.clientX-oul1.offsetLeft;

        document.onmousemove=function(ev){
            var et = ev || event;
            var l = et.clientX-disX;
            if (l>divC-(0+0.5)*oli1[0].offsetWidth){
                l=divC-(0+0.5)*oli1[0].offsetWidth;
            }
            if (l<divC-(oli1.length-1+0.5)*oli1[0].offsetWidth) {
                l=divC-(oli1.length-1+0.5)*oli1[0].offsetWidth;
            }
            wl();
            oul1.style.left=l+'px';
        }

        document.onmouseup=function(){
            document.onmousemove=null;
            document.onmouseup=null;
        }
        return false;
    }
    oul1.style.left=divC-(0+0.5)*oli1[0].offsetWidth+'px';
    wl();
    function wl(){
        for (var i = 0; i < oli1.length; i++) {
            var l = Math.abs(divC-(oli1[i].offsetLeft+oul1.offsetLeft+oli1[i].offsetWidth/2));
            var scale = 1-l/500;
            (scale<0.5)&&(scale=0.5);
            omg[i].style.width=scale*520+'px';
            omg[i].style.height=scale*358+'px';
            omg[i].style.marginLeft=-(omg[i].offsetWidth-260)/2+'px';
            omg[i].style.marginTop=-(omg[i].offsetHeight-179)/2+'px';
            /*oli1[i].children[1].innerHTML=scale.toFixed(2);//保留两位小数*/
            oli1[i].style.zIndex=scale*100;
        }
    }



    //滚动字幕
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
            scrollTop: 1140
        }, 900)
    });
    $(".nav4,.nav04").click(function() {
        $(".nav04").addClass("current");
        $(".nav04").siblings().removeClass("current");
        $("body,html").animate({
            scrollTop: 1620
        }, 1000)
    });
    $(".nav5,.nav05").click(function() {
        $(".nav05").addClass("current");
        $(".nav05").siblings().removeClass("current");
        $("body,html").animate({
            scrollTop: 3275
        }, 1000)
    })

}

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
            if ($(window).scrollTop() >= 1140 && $(window).scrollTop() < 1620) {
                $(".nav03").addClass("current");
                $(".nav03").siblings().removeClass("current")
            } else {
                if ($(window).scrollTop() >= 1620 && $(window).scrollTop() < 3000) {
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
});
