;(function(angular) {
  "use strict";

  angular
    .module('distractology')
    .controller('PressController', ['$log', '$state', '$sce', '$http', function($log, $state, $sce, $http) {
      var self = this;
      self.title = 'PRESS & MEDIA';
      self.subtitle = 'MEDIA CONTACTS';
      self.subtitle2 = 'RESOURCES';
      $(window).scrollTop(0);

      $http
          .get('/api/press')
          .success(getSuccess)

      function getSuccess(data) {
          $log.log(data);
          self.copy = data[0].copy;
          self.copyId = data[0].copyId;
      };

  }]);

}(window.angular));
