// 定义AMD模块，并导出两个方法
define([], function () {

    return {
        add: function (a, b) {
            return a + b;
        },
        diff: function (a, b) {
            return a - b;
        }
    };

});
