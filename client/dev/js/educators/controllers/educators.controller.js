;(function(angular) {
  "use strict";

  angular
    .module('distractology')
    .controller('EducatorsController', ['$log', '$state', '$http', function($log, $state, $http) {
      var self = this;
      self.title = 'EDUCATORS';

      $log.info('EducatorsController - starting up, yeah!');

      self.submit = function(details) {

          $http
              .post('/api/educators', details)
              .success(postSuccess)
              .error(postError);

          $log.info('EducatorController :: Bye!');

            $log.debug(details);

      }

      function postSuccess(data) {
          $log.info('EducatorController :: Success');
          $log.log(data);

          self.submitted = true;
          self.duplicate = false;

          $state.go("landing");

      }

      function postError(data) {

          swal({
              title: "User Alredy Exits",
              text: "Choose diferent User",
              type: "warning",
              showCancelButton: false,
              closeOnConfirm: true
          });

          $log.info('EducatorController :: Error');
          $log.info('Error: ' + JSON.stringify(data, null, 4));

          self.submitted = false;
          self.duplicate = true;
      }

    }]);
}(window.angular));
