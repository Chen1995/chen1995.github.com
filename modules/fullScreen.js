/*
    20170217
    苏成闯
    全屏 模块
*/

/* ----------------------------------------------------------------------------
                                    // --- //
                                    // OPT //
                                    // --- //

XXX.init(需要全屏的目标比如 Banner, 需要减去的目标比如 Header, 排除状态传类名 比如 .immersed 状态下不算);

---------------------------------------------------------------------------- */

define(function () {
    var targeta,
        oldHig;

    // 设置
    function setHeight(target, exclude, condition) {
        if ($(condition).length === 0) {
            targeta = function (b) {
                var fn = $(target).height;

                return b ? $(target).height(b) : $(target).height();
            };

            oldHig = targeta();

            targeta(function () {
                return $(window).height() - $(exclude).height();
            });
        }
    }

    // 还原
    function recovery() {
        targeta(oldHig);
    }

    return {
        init: setHeight,

        huan: recovery
    };
});
