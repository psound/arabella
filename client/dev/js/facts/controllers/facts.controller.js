;(function(angular) {
  "use strict";

  angular
    .module('distractology')
    .controller('FactsController', ['$log', function($log) {
      var self = this;
      self.title = 'FACTS & STATS';
      self.subtitle = 'Distracted Driving Facts & Stats';
    }]);
}(window.angular));
