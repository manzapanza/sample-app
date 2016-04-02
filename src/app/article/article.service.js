(function () {
    'use strict';
    angular
        .module('sample')
        .factory('Article', Article);

    /** @ngInject */
    function Article($q, $http, toastr) {
        var service = {
            total: 0,
            previous: null,
            current: null,
            currentIndex: null,
            next: null,
            articles: [],
            find: find,
            findById: findById,
            findBySlug: findBySlug,
            save: save,
            remove: remove
        };

        return service;

        ///////PUBLIC METHODS/////////
        function find() {
            return $http.get('app/components/dataSample/articles.json').success(function (res) {
                service.total = res.total;
                service.articles = res.articles;
            });
        }

        function findById(id) {
            var d = $q.defer();
            if (!service.articles.length) {
                service.find().then(function () {
                    return d.resolve(iterateArray('id', id));
                })
            } else {
                d.resolve(iterateArray('id', id));
            }
            return d.promise;
        }

        function findBySlug(slug) {
            var d = $q.defer();
            if (!service.articles.length) {
                service.find().then(function () {
                    return d.resolve(iterateArray('slug', slug));
                })
            } else {
                d.resolve(iterateArray('slug', slug));
            }
            return d.promise;
        }

        function save(article) {
            var d = $q.defer();
            if (article.id) {
                service.articles.map(function (v) {
                    if (article.id === v.id) {
                        v = article;
                        showToastr('Article edited', 'info');
                        d.resolve(v);
                    }
                });
            } else {
                article.id = Math.floor(Math.random() * 20000) + 1;
                article.updatedAt = new Date();
                article.slug = convertStringToSlug(article.fullTitle);
                service.articles.push(article);
                showToastr('Article created', 'success');
                d.resolve(article);
            }
            return d.promise;
        }

        function remove(idx) {
            service.articles.splice(idx, 1);
            showToastr('Article removed!', 'warning');
        }


        ///////PRIVATE METHODS/////////
        function iterateArray(field, value) {
            var len = service.articles.length;
            if (len) {
                for (var i = 0; i < service.articles.length; i++) {
                    var obj = service.articles[i];
                    if (obj[field] === value) {
                        service.previous = service.articles[(i+len-1)%len];
                        service.current = obj;
                        service.currentIndex = i;
                        service.next = service.articles[(i+1)%len];
                        return obj;
                    }
                }
            }
        }

        function convertStringToSlug(string){
            return string
                .toLowerCase()
                .replace(/ /g,'-')
                .replace(/[^\w-]+/g,'');
        }

        function showToastr(message, type) {
            if (!type) type = 'info';
            toastr[type](message);
        }
    }
}());
