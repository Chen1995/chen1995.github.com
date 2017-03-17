


define(["/widget/lib/jquery.min.js","modules/userControl"], function() {
    var page_name = $("#script_page").attr("page");

    switch (page_name) {
        case "index":
            require(["app/index"], function($obj) {
                $obj.init();
            });
            break;
        case "Case":
            require(["app/Case"], function($obj) {
                $obj.init();
            });
            break;
        case "LinkUS":
            require(["app/LinkUS"], function($obj) {
                $obj.init();
            });
            break;
        
   
    }
});
