;(function(angular) {
  //"use strict";

  angular
    .module('distractology')
    .controller('AdminDataController', ['$log', '$state', '$stateParams', '$http', '$xtorage', '$timeout', function($log, $state, $stateParams, $http, $xtorage, $timeout) {
      var self = this;
      self.title = 'ADMINDATA';
      self.submitted = false;
      self.loggedIn = $stateParams.isAuth;

      var getSuccess = function(data) {
          console.log(data);
          self.rawdata = data;
      };

      if(self.loggedIn == true) {

          var today = new Date();
          self.lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000).toDateString();
          self.today = today.toDateString();

          $log.info("Admin Controller");

          $http
              .get('/api/students')
              .success(getSuccess);

      } else {
          $('nav').hide();
      }

  }]);
}(window.angular));
