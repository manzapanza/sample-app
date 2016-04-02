(function () {
    'use strict';

    angular
        .module('sample')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })

            .state('css', {
                url: '/css-test',
                templateUrl: 'app/css-test/css.html',
                abstract: true
            })

            .state('css.list', {
                url: '',
                templateUrl: 'app/css-test/css.list.html',
                controller: 'CssController',
                controllerAs: 'css'
            })

            .state('css.create', {
                url: '/create',
                templateUrl: 'app/css-test/css.edit.html',
                controller: 'CssEditController',
                controllerAs: 'cssCreate'
            })

            .state('css.view', {
                url: '/:id',
                templateUrl: 'app/css-test/css.view.html',
                controller: 'CssViewController',
                controllerAs: 'cssView'
            })

            .state('css.edit', {
                url: '/edit/:id',
                templateUrl: 'app/css-test/css.edit.html',
                controller: 'CssEditController',
                controllerAs: 'cssEdit'
            })

            .state('articles', {
                abstract: true,
                url: '/articles',
                templateUrl: 'app/article/article.html'
            })

            .state('articles.list', {
                url: '',
                templateUrl: 'app/article/article.list.html',
                controller: 'ArticleController',
                controllerAs: 'articles'
            })

            .state('articles.create', {
                url: '/create',
                templateUrl: 'app/article/article.edit.html',
                controller: 'ArticleEditController',
                controllerAs: 'article'
            })

            .state('articles.view', {
                url: '/:id',
                templateUrl: 'app/article/article.view.html',
                controller: 'ArticleViewController',
                controllerAs: 'articleView'
            })

            .state('articles.edit', {
                url: '/edit/:id',
                templateUrl: 'app/article/article.edit.html',
                controller: 'ArticleEditController',
                controllerAs: 'article'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
