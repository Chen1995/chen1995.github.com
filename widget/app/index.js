/*
    陈斌
    首页 JS
*/

define([
    '/lib/RotatingBanner.js',
    "/lib/functions.js",
    "/lib/GrayScale.js",
    "modules/module_Index_service",
    "modules/modules_Product"
], function (RotatingBanner,functions,GrayScale,module_Index_service,modules_Product) {
    var index={
        init: function () {
        	
    		////banner轮播
    		var RotatingBanner_obj = {
		        autoPlay: null, // 自动播放：left/right/null，默认值：null
		        box_selector: "section.banner", // 外盒选择器，默认值：section.banner
		        pic_ul_selector: "ul.pic_ul", // 图片li的ul盒选择器，此盒必须存在于box_selector中，且值中不用包含box_selector。默认值：ul.pic_ul
		        point_ul_selector: "", // 圆点li的ul盒选择器，空字符串为无圆点。此盒不必存在于box_selector中。默认值：section.banner ul.point_ul。
		        // point_li_selected_className: null, // 圆点高亮li的className，默认值：selected
		        arrow_left_selector: ".banner .arrow_left", // 左箭头的盒选择器，此盒不必存在于box_selector中。null为无左箭头。默认值：null
		        arrow_right_selector: ".banner .arrow_right", // 右箭头的盒选择器，此盒不必存在于box_selector中。null为无右箭头。默认值：null
		        // duration: null, // 动画过渡时间，毫秒。默认500
		        resize_li: true // 自动改变li的宽高为外盒的宽高，默认true
		    };
			//如果有autoplay类，轮播
        	if($(".index .banner").hasClass("autoplay")){
        		RotatingBanner_obj.autoPlay="left";
        	}
        	var RotatingBanner_1 = new RotatingBanner();
		    RotatingBanner_1.init(RotatingBanner_obj);
		    
		    //服务无缝轮播
		    module_Index_service.init(functions);

		    //图片灰度
		    var GrayScale_para = {
	            box_selector: "body.index", // 作用范围选择器，如：body.index。无默认值
	            hover_restore: true // 鼠标悬停时是否还原图片（即取消灰色滤镜），默认true
	        };

	        GrayScale.init(GrayScale_para);

	        //产品点击事件
	        modules_Product.init();
        }
    };
    return index;
});
