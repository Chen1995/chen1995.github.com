/*
    陈斌
    服务无缝滚动 jS
*/

var Index_service = {
    init: function(functions) {
        
        var Roll_div=$(".modules_Service div.list_div");
        var Roll_left=$(".modules_Service div.left");
        var hover_div=$(".modules_Service div.left p,.modules_Service div.right p,.modules_Service div.list_div ul.list_ul");
        var Roll_right=$(".modules_Service div.right");
        var Roll_ul=Roll_div.children("ul.list_ul");
        var aLi=Roll_ul.children("li");
        //li的个数
        var aLi_length=aLi.length;
        var aLi_width=parseInt(aLi.css("width"))+parseInt(aLi.css("padding-left"))+parseInt(aLi.css("padding-right"));
        var ali_right=parseInt(aLi.css("margin-right"));
        var speed=1;
        
        Roll_ul.css("width",(aLi_width+ali_right)*aLi_length*2+"px");
        
        Roll_ul.html(Roll_ul.html()+Roll_ul.html());
        var func_left=function(){
            //ul向左滚动
            Roll_ul.animate({"margin-left":-(aLi_width+ali_right)*speed+"px"},800);

            //如果ul滚动了一半
            if((aLi_width+ali_right)*speed>=parseInt(Roll_ul.css("width"))/2){
                Roll_ul.animate({"margin-left":"0px"},0);
                speed=1;
            }else{
                speed++; 
            } 
        };
        //计时器
        var timer=setInterval(func_left,2800);
        function hover(){
            //console.log(1111);
            //鼠标进入移出
            hover_div.hover(
                function(){ //鼠标进入
                    clearTimeout(timer);
                    $(".li_click").on("click", function() {
                        functions.li_click($(this));
                    });
                },function(){ //鼠标离开
                    timer=setInterval(func_left,2000);
                }
            );
        }
        hover();

        //点击向左的按钮事件
        Roll_left.children("p").on("click",function(){
            if(speed<=aLi_length){
                speed++;
            }else{
                speed=2;
                Roll_ul.animate({"margin-left":"0px"},0);
            }
            Roll_ul.animate({"margin-left":-(aLi_width+ali_right)*(speed-1)+"px"},800);
        });
        //点击向右的按钮事件
        Roll_right.children("p").on("click",function(){
            if(speed>1){
                speed--;
            }else{
                speed=aLi_length;
                Roll_ul.animate({"margin-left":-(aLi_width+ali_right)*speed+"px"},0);
            }
            Roll_ul.animate({"margin-left":-(aLi_width+ali_right)*(speed-1)+"px"},800);

        });
    }
};

if (typeof define === "function" && define.amd) {
    define(function() {
        return Index_service;
    });
}
