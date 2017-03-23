// 配置
require.config({
    baseUrl: './libs/',
    paths: {
        'jquery': 'jquery',
        'underscore': 'underscore',
        'backbone': 'backbone',
        'text': 'text',
        'swiper' : 'swiper',
        'home': '/home/js/home',
        'mine': '/mine/js/mine',
        'cart': '/cart/js/cart',
        'sscs': '/sscs/js/sscs'
    }
});


// 引入主模块
requirejs(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {

    // 使用Backbone实现路由
    var Router = Backbone.Router.extend({
        routes: {
            '': 'homeFunc',
            'home': 'homeFunc',
            'sscs': 'sscsFunc',
            'cart': 'cartFunc',
            'mine': 'mineFunc'
        },
        homeFunc: function () {
            requirejs(['home','swiper'], function (Home,Swiper) {
                Home.init();
                Home.loadData();
            });
        },
        sscsFunc: function () {
            requirejs(['sscs'], function (Sscs) {
                Sscs.init();
            });
        },
        cartFunc: function () {

            requirejs(['cart'], function (Cart) {
                Cart.init();
            });
        },
        mineFunc: function () {

            requirejs(['mine'], function (Mine) {
                Mine.init();
            });
        }
    });
    new Router();
    Backbone.history.start();

});
