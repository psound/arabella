;(function(angular) {
  "use strict";

  angular
    .module('distractology')
    .controller('PressMediaController', ['$log', function($log) {
      var self = this;
      self.title = 'MEDIA COVERAGE';
      self.subtitle = 'Blah blah blah, text text text text text text text. Blah blah blah, text text text text text text text. ';
    }]);
}(window.angular));
