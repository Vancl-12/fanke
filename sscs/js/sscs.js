define(['text!/sscs/sscs.html','dataHelper'], function (html,DB) {
	// 给 + 绑定事件
    $(document).on('click', '#container .add', function () {
        var $this = $(this);
        var index = $this.parent().index(); // 当前项下标
        var currentItem = currentData[index];

        // 使用工具类保存商品
        DB.saveItem(currentItem);
    });
    
	// 声明变量，保存数据
    var currentData = null;

    function loadData(category) {
        var contents = $('#container .content ul');
        // 发起网络
        $.get('http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category=' + category, function (data) {
            currentData = JSON.parse(data).data;
            console.log(currentData);
            currentData.forEach(function (item) {
                $(`<li>
						<img src="${item.img}"/>
						<h3>${item.name}</h3>
						<div class="best">精选</div>
						<p class="weight">${item.specifics}/盒</p>
						<p class="price">¥${item.price}<span>¥${item.market_price}</span></p>
						<div class="itemadd">
							<div class='jian'>-</div>
							<span class="num"></span>
							<div class="add">+</div>
						</div>
					</li>`).appendTo(contents);
            });
        });
    }
    return {
        init: function () {
            // 修改html内容的代码，每次切换锚点的时候都需要重新执行，所以需要放到方法中，并调用
            $('#container').html(html);
            // 加载初始数据
            loadData('天天特价');
            
             // 绑定事件
            // 菜单
            $('#container .menu ul li').on('click', function (e) {
                // 获取点击的文字
                var category = $(this).html();

                // 清空内容
//              $('#container .content').empty();

                // 发起网络请求，拼接结构
                loadData(category);
            });
        }
        
    };

});