define("ace/theme/kc",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

    exports.isDark = false;
    exports.cssClass = "ace-kc";
    exports.cssText = ".ace-kc .ace_gutter {\
    background: #ebebeb;\
    color: #333;\
    overflow : hidden;\
    }\
    .ace-kc .ace_print-margin {\
    width: 1px;\
    background: #e8e8e8;\
    }\
    .ace-kc {\
    background-color: #FFFFFF;\
    color: #424242;\
    }\
    .ace-kc .ace_cursor {\
    color: #424242;\
    }\
    .ace-kc .ace_invisible {\
    color: rgb(191, 191, 191);\
    }\
    .ace-kc .ace_constant.ace_buildin {\
    color: rgb(88, 72, 246);\
    }\
    .ace-kc .ace_constant.ace_language {\
    color: rgb(88, 92, 246);\
    }\
    .ace-kc .ace_constant.ace_library {\
    color: #4db051;\
    }\
    .ace-kc .ace_invalid {\
    background-color: rgb(153, 0, 0);\
    color: white;\
    }\
    .ace-kc .ace_fold {\
    }\
    .ace-kc .ace_support.ace_function {\
    color: rgb(60, 76, 114);\
    }\
    .ace-kc .ace_support.ace_constant {\
    color: #4db051;\
    }\
    .ace-kc .ace_support.ace_type,\
    .ace-kc .ace_support.ace_class\
    .ace-kc .ace_support.ace_other {\
    color: rgb(109, 121, 222);\
    }\
    .ace-kc .ace_variable.ace_parameter {\
    font-style:italic;\
    color:#e75810;\
    }\
    .ace-kc .ace_keyword.ace_operator {\
    color: rgb(104, 118, 135);\
    }\
    .ace-kc .ace_comment {\
    color: #236e24;\
    }\
    .ace-kc .ace_comment.ace_doc {\
    color: #236e24;\
    }\
    .ace-kc .ace_comment.ace_doc.ace_tag {\
    color: #236e24;\
    }\
    .ace-kc .ace_constant.ace_numeric {\
    color: rgb(0, 0, 205);\
    }\
    .ace-kc .ace_variable {\
    color: rgb(49, 132, 149);\
    }\
    .ace-kc .ace_xml-pe {\
    color: rgb(104, 104, 91);\
    }\
    .ace-kc .ace_entity.ace_name.ace_function {\
    color: #4052b5;\
    }\
    .ace-kc .ace_heading {\
    color: rgb(12, 7, 255);\
    }\
    .ace-kc .ace_list {\
    color:rgb(185, 6, 144);\
    }\
    .ace-kc .ace_marker-layer .ace_selection {\
    background: rgb(181, 213, 255);\
    }\
    .ace-kc .ace_marker-layer .ace_step {\
    background: rgb(252, 255, 0);\
    }\
    .ace-kc .ace_marker-layer .ace_stack {\
    background: rgb(164, 229, 101);\
    }\
    .ace-kc .ace_marker-layer .ace_bracket {\
    margin: -1px 0 0 -1px;\
    border: 1px solid rgb(192, 192, 192);\
    }\
    .ace-kc .ace_marker-layer .ace_active-line {\
    background: rgba(0, 0, 0, 0.07);\
    }\
    .ace-kc .ace_gutter-active-line {\
    background-color : #dcdcdc;\
    }\
    .ace-kc .ace_marker-layer .ace_selected-word {\
    background: rgb(250, 250, 255);\
    border: 1px solid rgb(200, 200, 250);\
    }\
    .ace-kc .ace_storage,\
    .ace-kc .ace_keyword,\
    .ace-kc .ace_meta.ace_tag {\
    color: #9c27b0;\
    }\
    .ace-kc .ace_string.ace_regex {\
    color: rgb(255, 0, 0)\
    }\
    .ace-kc .ace_string {\
    color: #1A1AA6;\
    }\
    .ace-kc .ace_entity.ace_other.ace_attribute-name {\
    color: #994409;\
    }\
    .ace-kc .ace_indent-guide {\
    background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==\") right repeat-y;\
    }\
    ";
    
    var dom = require("../lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass);
    });                (function() {
                        window.require(["ace/theme/kc"], function(m) {
                            if (typeof module == "object" && typeof exports == "object" && module) {
                                module.exports = m;
                            }
                        });
                    })();
                