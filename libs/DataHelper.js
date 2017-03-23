define([], function () {

    // 常量
    const CARTKEY = 'cart';

    var readAllItem = function () {
        return JSON.parse(localStorage.getItem(CARTKEY)) || [];
    };
    var saveData = function (arr) {
        localStorage.setItem(CARTKEY, JSON.stringify(arr));
    };


    return {
        saveItem: function (obj) {
            // 1.取出对应的字符串，并解析为对象
            var arr = readAllItem();

            // 判断购物车中是否存在当前商品，如果存在，直接进行++操作
            var flag = false;
            arr.forEach(function (item) {
                if (item.name === obj.name) {
                    item.count++;
                    flag = true;
                }
            });

            // 2.把新商品push到数组中
            if (flag === false) {
                // 记录购物车商品数量
                obj.count = 1;
                arr.push(obj)
            }

            saveData(arr);
        },
        removeItem: function (obj) {
            // 取出数据
            var arr = readAllItem();

            arr.forEach(function (item, i) {
                if (item.name === obj.name) { // 获取对应的商品

                    // 如果当前商品数量为1，则直接从数组中移除当前元素
                    if (item.count === 1) {
                        arr.splice(i, 1);
                    } else {
                        item.count--;
                    }
                }
            });

            saveData(arr);
        },
        readAllItem: readAllItem
    }
});
