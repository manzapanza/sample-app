(function() {
  'use strict';

  angular
    .module('sample')
    .directive('sharePage', sharePage);

  /** @ngInject */
  function sharePage() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/sharePage/sharePage.html',
      bindToController: {
        title: '=',
      },
      controller: SharePageController,
      controllerAs: 'vm'
    };

    return directive;

    /** @ngInject */
    function SharePageController() {
      var vm = this;
      vm.url = window.location.href;
    }
  }

})();
