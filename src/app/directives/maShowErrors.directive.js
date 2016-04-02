(function () {
  'use strict';

  angular
    .module('sample.directives')
    .directive('maShowErrors', maShowErrors);


  /** @ngInject */
  function maShowErrors($timeout) {
    return {
      restrict: 'A',
      require:  '^form',
      scope: {
        maShowErrors: '='
      },
      link: function (scope, element, attrs, ctrl) {
        // find the text box element, which has the 'name' attribute
        var inputEl = element[0].querySelector('[name]');
        // convert the native text box element to an angular element
        var inputNgEl = angular.element(inputEl);
        // get the name on the text box so we know the property to check
        // on the form controller
        var inputName = scope.maShowErrors || inputNgEl.attr('name');

        // only apply the has-error class after the user leaves the text box
        inputNgEl.bind('blur', function () {
          element.toggleClass('has-error', ctrl[inputName].$invalid);
        });

        scope.$on('show-errors-check-validity', function () {
          element.toggleClass('has-error', ctrl[inputName].$invalid);
        });

        scope.$on('show-errors-reset', function () {
          $timeout(function () {
            element.removeClass('has-error');
          }, 0, false);
        });
      }
    };
  }

})();
