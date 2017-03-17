/*
    陈斌
    产品点击滚动事件 jS
*/

var Product = {
    init: function() {
        //产品类别
        var Product_top=$(".modules_Product .Product_top");
        var Product_middle=$(".modules_Product .Product_middle");
        var Product_footer=$(".modules_Product .Product_footer");
        var top_li=Product_top.children("ul.right").children("li");
        var middle_ul=Product_middle.children("ul.Product_ul");
        var middle_li=Product_middle.children("li");
        var footer_left=Product_footer.children(".left");
        var footer_right=Product_footer.children(".right");
        var index=0;
        //获取ul长度
        var ul_length=middle_ul.length;
        //获取ul长度
        var ul_width=middle_ul.eq(0).width();
        
        Product_middle.css("width",ul_width*ul_length)

        //产品类别点击事件
        top_li.on("click",function(){
            $(this).addClass("check").siblings().removeClass("check");
            index=$(this).index()/2;
            Product_middle.animate({"margin-left":-1200*index},300);
        })

        //向左向右点击事件
        footer_left.on("click",function(){
            if(index>0){
                index--;
                top_li.eq(index*2).addClass("check").siblings().removeClass("check");
                Product_middle.animate({"margin-left":-1200*index},300);
            }
        })

        //向左向右点击事件
        footer_right.on("click",function(){
            if(index<ul_length-1){
                index++;
                top_li.eq(index*2).addClass("check").siblings().removeClass("check");
                Product_middle.animate({"margin-left":-1200*index},300);
            }
        })
    }
};

if (typeof define === "function" && define.amd) {
    define(function() {
        return Product;
    });
}
