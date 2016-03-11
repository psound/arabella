;(function(angular) {
    "use strict";

    angular
        .module('distractology')
        .controller('ChallengeController', ['$log', '$state', '$http', function($log, $state, $http) {
            var self = this;
            self.title = 'THE CHALLENGE';
            self.loginError = false;
            $log.info('ChallengeController - starting up, yeah!');

            self.login = function(details) {
                self.thisCode = details.code;
                self.email = details.email;

                if(details.code != 'agent') {
                    $log.info('ChallengeController :: Login');
                    $log.debug(details);

                    $http
                        .post('/api/students/login', details)
                        .success(postSuccess)
                        .error(postError);

                    $log.info('ChallengeController :: Login :: Bye');
                } else {
                    self.hasCode = true;
                    $state.go('elearning.module-one', {hasCode: self.hasCode, thisCode: self.thisCode, email: self.email});
                }
            }

            function postSuccess(data) {
                $log.info('ChallengeController :: Login :: Success');
                $log.log(data);
                self.hasCode = true;
                var beenBefore = {studentCode: self.thisCode}
                $log.debug(beenBefore);

                $http
                    .post('/api/workflows/findAll', beenBefore)
                    .success(whereTogo)

            }

            function postError(data) {
                $log.info('ChallengeController :: Login :: Error');
                $log.error('Error: ' + JSON.stringify(data, null, 4));
                self.loginError = true;
            }

            function whereTogo(data) {
                $log.info('ChallengeController :: FindIt :: Success');
                $log.info(JSON.stringify(data, null, 4));
                if(data.message == null || typeof data.message == 'undefined')
                    $state.go('elearning.module-one', {hasCode: self.hasCode, thisCode: self.thisCode, email: self.email});
                else if(data.message.ModuleId == 1)
                    $state.go('elearning.module-two', {hasCode: self.hasCode, thisCode: self.thisCode, email: self.email});
                else if(data.message.ModuleId == 2)
                    $state.go('elearning.module-three', {hasCode: self.hasCode, thisCode: self.thisCode, email: self.email});
                else if(data.message.ModuleId == 3)
                    $state.go('elearning.module-four', {hasCode: self.hasCode, thisCode: self.thisCode, email: self.email});
                else if(data.message.ModuleId == 4)
                    $state.go('elearning.module-five', {hasCode: self.hasCode, thisCode: self.thisCode, email: self.email});
                else if(data.message.ModuleId == 5)
                    $state.go('elearning.module-summary', {hasCode: self.hasCode, thisCode: self.thisCode, email: self.email});
            }

            self.noCode = function() {
                self.hasCode = false;
                $state.go('elearning.module-one', {hasCode: self.hasCode});
            }

            self.forgotCode = function(recover) {
                console.log('here::' + recover.recoverEmail);

                var cred ={email: recover.recoverEmail};

                $http
                    .post('/api/students/getStudent', cred)
                    .success(sendLostCode);


                    $('#myModal').modal('hide');
            }

            function sendLostCode(data) {
                console.log('send email' + JSON.stringify(data, null, 4));
                var emailData = { email: data.message.email, code: data.message.code, from: 'recover' };
                $http
                    .post('/api/email', emailData);
            }

        }]);

}(window.angular));
