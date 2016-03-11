;(function(angular) {
  "use strict";

    angular
        .module('distractology')
        .controller('SurveyController', ['$log', '$state', '$http', function($log, $state, $http) {
            var self = this;
            self.title = 'SURVEY';


            self.submitted = false;
            self.duplicate = false;

            self.offLineData = "";

            $log.info('SurveyController - starting up, yeah!');


            self.someSelected = function (object) {
                console.log(object);
                return Object.keys(object).some(function (key) {
                return object[key];
              });
            }


            self.submit = function(details) {
                $log.info('SurveyController :: Submit!');
                $log.debug(details);
                self.offLineData = details;

                $http
                    .post('/api/students', details)
                    .success(postSuccess)
                    .error(postError);

                $log.info('SurveyController :: Bye!');

            }

            function postSuccess(data) {

                $log.info('SurveyController :: Success');
                $log.log(data);

                //self.submitted = true;
                //self.duplicate = false;

                $xtorage.save("surveyA", self.offLineData);

                $log.info('LocalStorage :: Success');

            }

            function postError(data) {
                $log.info('SurveyController :: Error-offline');
                $log.error('Error: ' + JSON.stringify(data, null, 4));


                self.submitted = false;
                self.duplicate = true;
            }

        }]);

}(window.angular));
