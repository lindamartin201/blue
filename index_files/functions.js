'use strict';

$(function () {
    new WOW().init();

    // Random button form text
    var btn_text = ['unlock her profile', 'unlock chat with her', 'unlock access', 'chat with her', 'exclusive access', 'limited access', 'limited membership'];
    var random_btn_text = btn_text[Math.floor(Math.random() * btn_text.length)];
    $('.form .btn-form').val(random_btn_text);
    $('.form .btn-form span').text(random_btn_text);
    $('.wrap-2 .form .btn-form span').each(function () {
        var me = $(this);
        me.html(me.html().replace(/^(\w+)/, '<span>$1</span>'));
    });
});
//# sourceMappingURL=main.js.map
