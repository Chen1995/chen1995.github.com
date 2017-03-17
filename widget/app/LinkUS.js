/*
    陈斌
    联系我们 JS
*/

define([
    '../lib/baidu_map'
], function (baidu_map) {	
    var LinkUS={
        init: function () {
        	// 创建地图对象
			var map1 = new baidu_map();

			// 初始化地图。也可用此方法得到一个干净的地图。
			map1.init({
			    map_obj_id: "baidu_map_1", // 地图容器ID。无默认值。
			    scroll_obj_selector: null, // overflow为scroll的外盒选择器。
			    /* 当地图容器存在于一个overflow为scroll的外盒中时，
			    需开启入场后再加载地图功能，以防止气泡不显示。*/
			    enableScrollWheelZoom: true, // 允许滚轮缩放。默认值：true
			    NavigationControl: true, // 左上角缩放尺。默认值：true
			    ScaleControl: false, // 左下角比例尺。默认值：false
			    OverviewMapControl: true, // 右下角小地图：true
			    CurrentCity: "北京", // 当前城市。默认值：北京
			    MapTypeControl: true, // 右上角地图种类，仅当设置当前城市后可用。默认值：true
			    MapClickEnable: true // 底图可点
			});

			// 为地图增加气泡标记点，并将第一个标记点作为地图中心点，同时调整zoom。可反复调用。调用前如想清空地图，可调用init方法
			map1.PointMarker({
			    clearOld: true, // 清除原有marker
			    Zoom: 14, // 调整地图的zoom
			    Points: [
			    {
			        Keywords: "悠唐生活广场",
			        // Label: "悠唐",
			        Bounce: false,
			        click_callback: function(marker){

			            // 点击气泡显示信息框
			            map1.PointMarkerInfo.apply(map1, [{
			                marker: marker, // 必须有
			                content: "这里是概述，支持html标签", // 内容，支持html标签
			                para: {
			                    title: "悠唐", //标题
			                    width: 300, //宽度，默认300
			                    height: 50, //content高度，默认50
			                    enableAutoPan: true, //自动平移，默认true
			                    searchTypes: [
			                        BMAPLIB_TAB_SEARCH, //周边检索
			                        BMAPLIB_TAB_TO_HERE, //到这里去
			                        BMAPLIB_TAB_FROM_HERE //从这里出发
			                    ]
			                }
			            }]);
			        }
			    }]
			});

			// 为地图增加搜索气泡标记点，地图自动调整中心点和zoom。可反复调用。调用前如想清空地图，可调用init方法
			map1.Search({
			    SearchKeywords: "礼士宾馆" // 关键词
			});
        }
    };
    return LinkUS;
});
