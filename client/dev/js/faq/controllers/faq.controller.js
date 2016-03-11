;(function(angular) {
  "use strict";

  angular
    .module('distractology')
    .controller('FaqController', ['$log', function($log) {
      var self = this;
      self.title = 'FAQ';
    }]);
}(window.angular));
