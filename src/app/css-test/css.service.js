(function () {
    'use strict';
    angular
        .module('sample')
        .factory('Css', Css);

    /** @ngInject */
    function Css($q, $http, toastr) {
        var service = {
            total: 0
        };

        return service;

        ///////PUBLIC METHODS/////////
    }
}());
