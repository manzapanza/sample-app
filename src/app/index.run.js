(function() {
  'use strict';

  angular
    .module('sample')
    .run(runBlock);

  /** @ngInject */
  function runBlock($http, $log) {

    $http.defaults.headers.common['Meplis-Security-Server'] = 'xpto-belgium';

    $log.debug('runBlock end');

  }

})();
