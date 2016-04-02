(function () {
    'use strict';

    angular
        .module('sample')
        .controller('ArticleController', ArticleController)
        .controller('ArticleViewController', ArticleViewController)
        .controller('ArticleEditController', ArticleEditController);

    /** @ngInject */
    function ArticleController(Article) {
        var vm = this;

        if (!Article.articles.length) {
            Article.find().then(function () {
                vm.articles = Article.articles;
            });
        } else {
            vm.articles = Article.articles;
        }

        vm.remove = function (idx) {
            Article.remove(idx);
        }

        vm.orderBy = 'title';
        vm.orderByReverse = false;
        vm.sort = function(field){
            vm.orderBy = field;
            vm.orderByReverse = (vm.orderBy === field) ? !vm.orderByReverse : false;
        };

    }

    /** @ngInject */
    function ArticleViewController($state, Article) {
        var vm = this;
        Article.findById($state.params.id).then(function (res) {
            vm.current = res;
        });
    }

    /** @ngInject */
    function ArticleEditController($state, Article, languages) {
        var vm = this;
        vm.languages = languages.data.languages;

        if ($state.params.slug) {
            vm.editMode = true;
            console.log( Article);
            Article.findBySlug($state.params.slug).then(function (res) {
                vm.current = res;
            });
        }

        vm.save = function (article) {
            Article.save(article).then(function () {
                $state.go('^.list');
            });
        };

    }
})();
