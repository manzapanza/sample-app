(function () {
  'use strict';

  /** @ngInject */
  function maValidateSubmit($parse) {
    return {
      restrict: 'A',
      require: 'form',
      link: function (scope, element, attrs, ctrl) {
        var fn = $parse(attrs.maValidateSubmit);
        element.bind('submit', function (event) {
          scope.$broadcast('show-errors-check-validity');
          // if form is not valid cancel it.
          if (!ctrl.$valid) {
            return false;
          }
          scope.$apply(function () {
            fn(scope, {$event: event});
          });
        });
      }
    };
  }

  angular
    .module('sample.directives')
    .directive('maValidateSubmit', maValidateSubmit);

})();
