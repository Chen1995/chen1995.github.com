/*
    陈斌
    用户控件 JS
*/

define(["modules/header",'/lib/jquery.min.js'], function (header) {

	header.init();

    if ($('.li_click').length > 0 || $('.li_touchstart').length > 0)
        require(['/lib/functions.js']);
    /*if ($('.toTop').length > 0)
        require(['app/comm/toTop'], function ($toTop) { $toTop(); });
    if ($('.jsImgCenter').length > 0)
        require(['modules/imgCenter'], function ($imgCenter) { $imgCenter('.jsImgCenter'); });*/
});
