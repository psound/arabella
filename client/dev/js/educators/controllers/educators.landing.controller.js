;(function(angular) {
  "use strict";

  angular
    .module('distractology')
    .controller('EducatorsLandingController', ['$log', function($log) {
      var self = this;
      self.title = 'FOR EDUCATORS';
      $log.info('EducatorsLandingController - starting up, yeah!');
    }]);
}(window.angular));
