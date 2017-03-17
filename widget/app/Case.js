/*
    陈斌
    首页 JS
*/

define([
    '../lib/WaterFall',
    '../lib/functions'
], function (WaterFall,$func) {
	

	
    var Case={
        init: function () {
        	function Ajax(){
				$.ajax({
			        url:'/views/template_8/list.html',
			        type: 'get',
			        data : {
			            
			        },
			        success: function(data){
			        	/*if (data.error=='SUCCESS'){
	                        result = data;
	                        base_datalist = new Array();
	                        var i = 0;
	                        len = result.list.length;
	                        var base_datalist = [];
	                        for (; i < len; i++) {
	                            base_datalist[i] = {
	                                img: url_img+result.list[i].Pic1,
	                                title: result.list[i].Ptitle,
	                                content: result.list[i].Recommend_summary,
	                                pid: result.list[i].Pid,
	                                id : result.list[i].Pkind
	                            };
	                        }
	                    }*/
			        	var base_datalist=[{
			        		"img": "/uploadFile/template_8/Case_list_01.png"
			        	},{
			        		"img": "/uploadFile/template_8/Case_list_02.png"
			        	},{
			        		"img": "/uploadFile/template_8/Case_list_03.png"
			        	},{
			        		"img": "/uploadFile/template_8/Case_list_04.png"
			        	},{
			        		"img": "/uploadFile/template_8/Case_list_05.png"
			        	},{
			        		"img": "/uploadFile/template_8/Case_list_04.png"
			        	},{
			        		"img": "/uploadFile/template_8/Case_list_01.png"
			        	},{
			        		"img": "/uploadFile/template_8/Case_list_06.png"
			        	},{
			        		"img": "/uploadFile/template_8/Case_list_05.png"
			        	},{
			        		"img": "/uploadFile/template_8/Case_list_06.png"
			        	},{
			        		"img": "/uploadFile/template_8/Case_list_03.png"
			        	},{
			        		"img": "/uploadFile/template_8/Case_list_06.png"
			        	},{
			        		"img": "/uploadFile/template_8/Case_list_01.png"
			        	},{
			        		"img": "/uploadFile/template_8/Case_list_06.png"
			        	},{
			        		"img": "/uploadFile/template_8/Case_list_02.png"
			        	},{
			        		"img": "/uploadFile/template_8/Case_list_04.png"
			        	},{
			        		"img": "/uploadFile/template_8/Case_list_06.png"
			        	}];

			        	var WaterFall_para = {
					        // listener_scroll_selector: "section.waterfall", // 监听滚动的选择器。默认window，移动端使用mobile_stop_moved模块时，可以设置为最外盒
					        box_selector: "section.waterfall ul", // 项目单元外盒选择器。无默认值。后自动设置行内元素样式 position: relative;
					        item_selector: 'li', // 项目单元选择器。必须存在于box内。无默认值
					        item_width: 380, // 项目单元宽度。不包含列间距。无默认值
					        line_top: 30, // 行 上间距。默认0
					        line_first_top: 0, // 第一行 上间距。默认0
					        column_left: 15, // 列 左间距。默认0
					        column_first_left: 0, // 第一列 左间距。默认0
					        unit: "px", // 宽高单位 "px|vw", 默认px。且重置窗口大小时，vw不重新计算对应的px
					        item_min: 3, // 最小列数，默认1。
					        ps: 4, // 每页显示数量。默认50（5×10）
					        data_template: '<li class="li_click" url="">'+
				                '<div class="img_div">'+
				                    '<img src="{$data-img}">'+
				                '</div>'+
				                '<div class="title">标题标题标题</div>'+
				                '<div class="info">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容...</div>'+
				            '</li>', // 项目单元模板字符串。不传此参数，则项目单元直接装载datalist；传此参数，则datalist需要传入json对象，按键名替换模板中的{$data-key}。
					        datalist: base_datalist, // 项目单元内容。支持字符串数组或JSON对象。JSON对象需配合data_template使用
					        resize_window_resize_column_number: false, // 改变窗口大小时，重新计算列宽度（清空所有项目单元并重新加载，耗资源），默认false
					        callback_item_success: function(_item_obj) { // 项目单元成功插入回调 _item_obj: 新插入的单元对象。无默认值
					            _item_obj.click(function() {
                                            $func.li_click(_item_obj);
                                        });
					            //console.log("项目单元成功插入回调 _item_obj: 新插入的单元对象。无默认值"+JSON.stringify(_item_obj));
					        },
					        callback_all_success: function() { // 第一次加载时，所有需要加载的图片加载成功回调。无默认值
					            //console.log("成功回调。无默认值");
					        },
					        callback_none_success: function() { // 0数据行成功回调（没有数据）。无默认值
					            //console.log("0数据行成功回调（没有数据）。无默认值");
					        }
					    };
					    WaterFall.init(WaterFall_para);
			        }
			    });
			}
			Ajax();
        }
    };
    return Case;
});
