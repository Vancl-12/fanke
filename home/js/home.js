define(['text!/home/home.html','swiper'], function (html,Swiper) {



    return {
        init: function () {
            // 修改html内容的代码，每次切换锚点的时候都需要重新执行，所以需要放到方法中，并调用
            $('#container').html(html);
        }, 
        loadData: function () {
            // 发起网络请求
            var swiperWrapper = $('.swiper-wrapper');

            $.get('http://www.vrserver.applinzi.com/aixianfeng/apihome.php', function (data) {

                // 使用forEach去遍历数据
                JSON.parse(data).data.slide.forEach(function (item) {
                    $(`<div class="swiper-slide">
                            <img src="${ item.activity.img }" alt="">
                        </div>`).appendTo(swiperWrapper);
                });

                // 处理轮播图自动轮播
                new Swiper ('.swiper-container', {
                    loop: true,
                    autoplay: 1000,

                    // 如果需要分页器
                    pagination: '.swiper-pagination',
                })

				
                });

        }
        
    };

});
