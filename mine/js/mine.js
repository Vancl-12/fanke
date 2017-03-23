define(['text!/mine/mine.html'], function (html) {

    return {
        init: function () {
            // 修改html内容的代码，每次切换锚点的时候都需要重新执行，所以需要放到方法中，并调用
            $('#container').html(html);
        }
    };

});
