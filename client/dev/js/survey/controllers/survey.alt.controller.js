;(function(angular) {
  "use strict";

  angular
    .module('distractology')
    .controller('SurveyController', ['$log', '$state', '$http', '$xtorage', function($log, $state, $http, $xtorage) {
      var self = this;
      self.title = 'SURVEY ALT';

      self.submitted = false;
      self.duplicate = false;

      self.offLineData = "";

      $log.info('SurveyController - starting up, yeah!');

      self.submit = function(details) {
           self.offLineData = details;
          if(navigator.onLine === true) {
              $log.info('SurveyController :: Submit!');
              $log.debug(details);

              $http
                  .post('/api/students', details)
                  .success(postSuccess)
                  .error(postError);

              $log.info('SurveyController :: Bye!');
          } else {
              $xtorage.save("survey"+details.surveyType+"-"+details.code, self.offLineData);
              $log.info('LocalStorage :: Success');
              swal({
                  title: "You are Offline!",
                  text: "Data is being saved locally!",
                  type: "warning",
                  showCancelButton: false,
                  closeOnConfirm: true
                },
                function(){
                    $log.info('Cleanning Fields :: Success');
                    $('#SurveyForm')[0].reset();
                });
          }
      }


      function postSuccess(data) {
          $log.info('SurveyController :: Success');

          self.submitted = true;
          self.duplicate = false;

          setTimeout(function(){
              $state.reload();
          }, 5000);
      }

      function postError(data) {
          $log.info('SurveyController :: Error');
          $log.error('Error: ' + JSON.stringify(data, null, 4));

          self.submitted = false;
          self.duplicate = true;
      }
    }]);
}(window.angular));
