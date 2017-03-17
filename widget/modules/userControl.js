/*
    陈斌
    用户控件 JS
*/

define(["modules/header",'/widget/lib/jquery.min.js'], function (header) {

	header.init();

    if ($('.li_click').length > 0 || $('.li_touchstart').length > 0)
        require(['/widget/lib/functions.js']);
    /*if ($('.toTop').length > 0)
        require(['app/comm/toTop'], function ($toTop) { $toTop(); });
    if ($('.jsImgCenter').length > 0)
        require(['modules/imgCenter'], function ($imgCenter) { $imgCenter('.jsImgCenter'); });*/
});
