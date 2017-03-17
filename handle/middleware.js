/*
    中间件
    高京
    2017-02-13
*/

var config = require('./config.js');
var mw = require('./middleware.js');
var func = require('../handle/functions.js');

// Sites表缓存对象
exports.Sites = null;

// Sites_Categories表缓存对象
exports.Sites_Categories = null;

// 根据二级域名获得对应网站
exports.getSiteByDomain = function(req, res, next) {
    var domain = req.headers.host;

    // 测试域名
    domain = "tiamo.bsbs.com";

    var callback = function(err, result) {
        if (err) {

        } else {
            mw.Sites = result[0];


            var list = mw.Sites.list;

            var i = 0,
                len = list.length,
                Site;

            for (; i < len; i++) {
                if (list[i].Domain == domain) {
                    Site = list[i];
                    break;
                }
            }

            if (Site)
                next(Site);
            else {
                var _err = new Error('域名记录未找到');
                func.Error(res, _err);
            }
        }
    };



    var Json_Select = [{
        "cache": mw.Sites,
        "type": "Sites",
        "act": "Select_List",
        "para": {
            "params": {
                "s_Alive": "1",
                "s_Keywords": "",
                "s_Member_Alive": "1",
                "s_Mid": "",
                "s_ofSid": "-1",
                "s_Order": "",
                "s_Pause": "2",
                "s_Sid": "",
                "s_Tcid": "",
                "s_Tid": "",
                "s_Total_parameter": "Sid,Mid,Stitle,ieTitle,ieSubTitle,seoKeywords,seoDescription,Copyright,Pic1,Tcid,Tid,rb_height,rb_autoplay,rb_switch,rb_over_logo,Member,Domain"
            },
            "pages": {
                "p_c": "",
                "p_First": "",
                "p_inputHeight": "",
                "p_Last": "",
                "p_method": "",
                "p_Next": "",
                "p_Page": "",
                "p_pageName": "",
                "p_PageStyle": "",
                "p_Pname": "",
                "p_Previous": "",
                "p_Ps": "",
                "p_sk": "",
                "p_Tp": ""
            }
        }
    }];

    config.getDataFromRestFul(callback, Json_Select);
};

// 根据网站获得栏目
// 存于Site.Categories
// 包含的子栏目存于父级栏目单元的.sub{}中
// Site：网站
exports.getCategoriesBySite = function(Site, req, res, next) {

    var callback = function(err, result) {

        if (err) {

        } else {
            mw.Sites_Categories = result[0];

            var list = result[0].list;

            var i = 0,
                j = 0,
                k = 0,
                m = 0,
                len = list.length,
                Categories = [];

            for (; i < len; i++) {
                if (list[i].Sid == Site.Sid && list[i].navi_show && list[i].ofScid == -1) {
                    Categories[j] = list[i];

                    if (list[i].navi_hover_show_sub) {
                        Categories[j].sub = [];
                        k = i;
                        m = 0;
                        while ((++k) < list.length) {
                            if (list[k].Sid != list[i].Sid)
                                break;
                            if (list[k].ofScid == list[i].Scid)
                                Categories[j].sub[m++] = list[k];
                        }
                    }

                    j++;
                }
            }

            Site.Categories = Categories;
        }
        next(Site);
    };

    var Json_Select = [{
        "cache": mw.Sites_Categories,
        "type": "Sites_Categories",
        "act": "Select_List",
        "para": {
            "params": {
                "s_Alive": "1",
                "s_Keywords": "",
                "s_Kind": "",
                "s_navi_show": "1",
                "s_ofScid": "",
                "s_Order": "Sid,ofScid,Layer",
                "s_Scid": "",
                "s_Sid": Site.Sid.toString(),
                "s_Tid": "",
                "s_Total_parameter": "Scid,Sid,Ctitle,navi_show,ofScid,navi_hover_show_sub"
            },
            "pages": {
                "p_c": "",
                "p_First": "",
                "p_inputHeight": "",
                "p_Last": "",
                "p_method": "",
                "p_Next": "",
                "p_Page": "",
                "p_pageName": "",
                "p_PageStyle": "",
                "p_Pname": "",
                "p_Previous": "",
                "p_Ps": "",
                "p_sk": "",
                "p_Tp": ""
            }
        }
    }];

    config.getDataFromRestFul(callback, Json_Select);
};

// 整理header的参数
// 存于Site.header中
// Site: 网站
exports.getHeaderProp = function(Site, req, res, next) {
    var header = {};

    // title
    header.title = Site.ieTitle == "" ? Site.Stitle : Site.ieTitle;
    header.title += Site.ieSubTitle == "" ? "" : " - " + Site.ieSubTitle;

    // 关键字
    header.seoKeywords = Site.seoKeywords;

    // 描述
    header.seoDescription = Site.seoDescription;

    // 皮肤
    header.skinID = Site.Tcid;

    console.log("\nmw", 197, "header\n", header);

    Site.header = header;

    next(Site);
};
