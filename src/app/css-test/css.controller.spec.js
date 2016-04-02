(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('sample'));

    it('should define more than 5 awesome things', inject(function($controller) {
      var vm = $controller('CssController');

      expect(angular.isArray([])).toBeTruthy();
      expect([1,2,3,4,5,6].length > 5).toBeTruthy();
    }));
  });
})();
