;(function(angular) {
  "use strict";

  angular
    .module('distractology')
    .controller('ContactController', ['$log', '$state', '$http', function($log, $state, $http) {
      var self = this;
      self.title = 'CONTACT';

      self.submitted = false;
      self.duplicate = false;
      self.active = false;

      self.contact = {};

      $(window).scrollTop(0);
      $log.info('ContactController - starting up, yeah!');
      //console.log($state);

      self.submit = function(details) {
        //$log.debug(details);
        //self.submitted = true;
        //$state.go("confirmation");
        $log.debug(details);
        self.contact = details;
        self.active = true

        $http
            .post('/api/contacts', details)
            .success(postSuccess, details)
            .error(postError);

        $log.info('ContactController :: Bye!');
      }


      function postSuccess(data, details) {
          $log.info('ContactController :: Success');

          self.submitted = true;
          //self.duplicate = false;

          $log.info('EmailController:: In!');
          self.contact['from'] = 'contact';

          $log.log(self.contact);
          $http
              .post('/api/email', self.contact);

          self.active = false;

      }

      function postError(data) {
          $log.info('ContactController :: Error');
          $log.info('Error: ' + JSON.stringify(data, null, 4));

          self.submitted = false;
          //self.duplicate = true;
          self.active = false;
          swal({
              title: "Error",
              text: "Contact Admin",
              type: "error",
              showCancelButton: false,
              closeOnConfirm: true
          });
      }

  }]);

}(window.angular));
