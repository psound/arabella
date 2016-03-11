;(function(angular) {
  //"use strict";

  angular
    .module('distractology')
    .controller('AdminHomeController', ['$log', '$state', '$stateParams', '$http', '$xtorage', '$timeout', 'md5', function($log, $state, $stateParams, $http, $xtorage, $timeout, md5) {
      var self = this;
      self.title = 'ADMINDATA';
      self.loggedIn = false;
      self.loginError = false;

       self.login = function(details) {

          details['password'] = md5.createHash(details.password);
          //$log.log(details);
          $http
                .post('/api/admin/login', details)
                .success(postSuccess)
                .error(postError);
       };

       function postSuccess(data) {
           $log.info('AdminController :: Login :: Success');
           self.rawdata = data;
           self.loggedIn = true;
           $state.go("admin-data", {isAuth: true });
       };

       function postError(data) {
           self.loginError = true;
           $log.info('AdminController :: Login :: Error');
           $log.info('Error: ' + JSON.stringify(data, null, 4));
       };

  }]);
}(window.angular));
