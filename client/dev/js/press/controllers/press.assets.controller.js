;(function(angular) {
  "use strict";

  angular
    .module('distractology')
    .controller('PressAssetsController', ['$log', function($log) {
      var self = this;
      self.title = 'PHOTOS & VIDEOS';
      self.subtitle = 'Blah blah blah, text text text text text text text. Blah blah blah, text text text text text text text. ';

      $log.info('PressAssetsController::Started');
      $('#carousel-example-generic').carousel('cycle');
    }]);
}(window.angular));
