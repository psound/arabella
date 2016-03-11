;(function(angular) {
  "use strict";

  angular
    .module('distractology')
    .controller('LawsController', ['$log', function($log) {
      var self = this;
      self.title = 'LAWS';
      self.subtitle = 'Blah blah blah, text text text text text text text. Blah blah blah, text text text text text text text. ';
    }]);
}(window.angular));
