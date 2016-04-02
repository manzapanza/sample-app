(function() {
  'use strict';

  angular
    .module('sample')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
