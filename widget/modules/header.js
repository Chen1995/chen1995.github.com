/*
    陈斌
    新闻资讯无缝滚动 jS
*/

var Header = {
    init: function() {
        var header_ul=$("header.content >ul");
        var header_li=header_ul.children("li");
        //获取header li的宽度
        var li_width=header_li.width();
        var li_paddingleft=parseInt(header_li.css("padding-left"));
        var li_paddingright=parseInt(header_li.css("padding-right"));


        var li_check=0;
        var li_mouseover=0;
        //获取当前选中的第几个li
        header_li.each(function(){
        	if($(this).hasClass("check")){
        		li_check=$(this).index();
        	}
        });

        //鼠标进入事件
        header_li.on("mouseover",function(e){
        	li_mouseover=$(this).index();
        	var left=(li_mouseover-li_check)*(li_width+li_paddingleft+li_paddingright)+20;
        	header_ul.children("li.check").children("span").stop().animate({"left":left+"px"},500);
        });

        //鼠标离开事件
        header_li.on("mouseout",function(e){
        	li_mouseover=0;
        	header_ul.children("li.check").children("span").stop().animate({"left":"20px"},500);
        });
    }
};

if (typeof define === "function" && define.amd) {
    define(function() {
        return Header;
    });
}
