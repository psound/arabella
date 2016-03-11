;(function(angular) {
  //"use strict";

  angular
    .module('distractology')
    .controller('PressAdminController', ['$log', '$state', '$stateParams', '$http', '$xtorage', '$timeout', function($log, $state, $stateParams, $http, $xtorage, $timeout) {
      var self = this;
      self.title = 'ADMINPRESS';
      self.submitted = false;

      self.loggedIn = $stateParams.isAuth;

      var getSuccess = function(data) {
          $log.log(data);
          self.copy = data[0].copy;
          self.copyId = data[0].copyId;
      };
      self.submit = function(details) {

           var text = {copy: details, copyId: self.copyId};
           $log.log(text);

          $http
              .post('/api/press/updateActive', text)
              .success(postSuccess)
              .error(postError);
              $log.info('TourController :: Bye!');
      }
      function postSuccess(data) {
          $log.info('PressController :: Success-Save');
          self.submitted = true;
          $log.log(data);
          $timeout(function() {
              self.submitted = false;
          }, 3000);
      }

      function postError(data) {}

      if(self.loggedIn == true) {
          $http
              .get('/api/press')
              .success(getSuccess);

       } else {
        $('nav').hide();
       }

  }]);
}(window.angular));
