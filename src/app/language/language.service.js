(function () {
    'use strict';
    angular
        .module('sample')
        .factory('Language', Language);

    /** @ngInject */
    function Language($q, $http) {
        var service = {
            total: 0,
            current: null,
            langauges: [],
            find: find,
            findById: findById
        };

        return service;

        ///////PUBLIC METHODS/////////
        function find() {
            return $http.get('app/components/dataSample/languages.json').success(function (res) {
                service.total = res.total;
                return service.langauges = res.langauges;
            });
        }

        function findById(id) {
            var d = $q.defer();
            if (!service.langauges.length) {
                service.find().then(function () {
                    return d.resolve(iterateArray('id', id));
                })
            } else {
                d.resolve(iterateArray('id', id));
            }
            return d.promise;
        }

        ///////PRIVATE METHODS/////////
        function iterateArray(field, value) {
            if (service.languages.length) {
                for (var i = 0; i < service.languages.length; i++) {
                    var obj = service.languages[i];
                    if (obj[field] === value) {
                        service.current = obj;
                        return obj;
                    }
                }
            }
        }

    }
}());
