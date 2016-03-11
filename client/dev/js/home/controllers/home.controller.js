;(function(angular) {
  "use strict";

  angular
    .module('distractology')
    .controller('HomeController', ['$log', function($log) {
      var self = this;
      self.title = 'HOME PAGE';
    }]);
}(window.angular));
