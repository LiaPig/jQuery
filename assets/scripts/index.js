/**
 * Created by Miya on 2017/8/11.
 */


/*搜索框文字效果*/
$(function () {
    $("#inputSearch").focus(function () {
        $(this).addClass("focus");
        if($(this).val() == this.defaultValue){
            $(this).val("");
        }
    }).blur(function () {
        $(this).removeClass("focus");
        if($(this).val() == ''){
            $(this).val(this.defaultValue);
        }
    }).keyup(function (e) {
        if(e.which == 13){
            alert('回车提交表单！')
        }
    })
})

/*导航效果*/
$(function () {
    $("#nav li").hover(function () {
        if($(this).find(".liaNav")){
            $(this).find(".liaNav").show();
        }
    },function () {
        $(this).find(".liaNav").hide();
    })
})

/*左侧商品分类热销效果*/
$(function () {
    $(".liaCatainfo .promoted").append('<span class="hot"></span>');
})

/*中间上部的产品广告效果,5s自行切换*/
$(function () {
    var $imgRolls = $("#liaImageroll div a");
    $imgRolls.css("opacity", 0.7);
    var len = $imgRolls.length;
    var index = 0;
    var adTimer = null;
    $imgRolls.mouseover(function () {
        index = $imgRolls.index(this);
        showImg(index);
    }).eq(0).mouseover();

    //滑入停止动画，滑出开始动画
    $("#liaImageroll").hover(function () {
        if(adTimer){
            clearInterval(adTimer);
        }
    },function () {
        adTimer = setInterval(function () {
            showImg(index);
            index++;
            if(index == len){
                index = 0;
            }
        }, 5000);
    }).trigger("mouseleave")
})

/*显示广告效果的函数*/
function showImg(index) {
    var $rollObj = $("#liaImageroll");
    var $rollList = $rollObj.find("div a");
    var newHref = $rollList.eq(index).attr("href");
    $("#lia_imgWrap").attr("href", newHref)
                     .find("img").eq(index).stop(true, true).fadeIn()
                     .siblings().fadeOut();
    $rollList.removeClass("chos").css("opacity", 0.7)
             .eq(index).addClass("chos").css("opacity" , 1);
}

/*自制超链接的提示效果,在右上角*/
$(function () {
    var x = 10;
    var y = 20;
    $("a.tooltip").mouseover(function (e) {
        this.myTitle = this.title;
        this.title = "";
        var tooltip = "<div id = 'tooltip'>"+ this.myTitle + "</div>";
        $("body").append(tooltip); //把div元素追加到文档中
        $("#tooltip").css({
            "top": (e.pageY - y) + "px",
            "left": (e.pageX - x) + "px",
        }).show("fast");
    }).mouseout(function () {
        this.title = this.myTitle;
        $("#tooltip").remove();
    }).mouseover(function (e) {
        $("#tooltip").css({
            "top": (e.pageY - y) + "px",
            "left": (e.pageX - x) + "px",
        });
    });
})

/*右下角品牌活动横向滚动效果*/
$(function () {
    $("#liaBrandTab li a").click(function () {
        $(this).parent().addClass("chos")
               .siblings().removeClass("chos");
        var idx = $("#liaBrandTab lia a").index(this);
        showBrandList(idx);
        return false;
    }).eq(0).click();
})

/*显示模块的函数*/
/*function showBrandList(index) {
    var $rollObj = $("#liaBrandList");
    var rollWidth = $rollObj.find("li").outerWidth();
    rollWidth = rollWidth * 4;
    $rollObj.stop(true, false).animate({
        left: -rollWidth * index
    }, 1000);
}*/

/*光标滑过显示产品效果*/
/*
$(function () {
    $("#liaBrandList li").each(function (index) {
        var $img = $(this).find("img");
        var img_w = $img.width();
        var img_h = $img.height();
        var span_html = '<span style="position: absolute;top: 0;left: 45px;width: ' + img_w + 'px;height:' + img_h + 'px;" class="imageMask"></span>';
        $(span_html).appendTo(this);
    })
})

$(function () {
    $("#liaBrandList").find(".imageMask").hover(function () {
        $(this).toggleClass("imageOver");
    })
})

$(function () {
    $("#liaBrandList").delegate(".imageMask", "hover", function () {
        $(this).toggleClass("imageOver");
    })
})*/
