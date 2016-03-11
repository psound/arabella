;(function(angular) {
    "use strict";

    angular
        .module('distractology')
        .controller('ModuleSummaryController', ['$log', '$stateParams', '$state', '$http', '$timeout', '$location', function($log, $stateParams, $state, $http, $timeout, $location) {
            var self = this;
            self.steps = ['one', 'two'];
            self.step = 0;

            var qstring = $location.search();

            self.hasCode = $stateParams.hasCode;
            self.thisCode = $stateParams.thisCode;
            self.email = $stateParams.email;

            if(typeof qstring.email != 'undefined' && typeof qstring.code != 'undefined') {
                self.hasCode = true;
                self.email = qstring.email;
                self.thisCode = qstring.code;
            }

            self.showContinueButton = false;

            self.isFirstStep = function () {
                return self.step === 0;
            };

            self.isLastStep = function () {
                return self.step === (self.steps.length - 1);
            };

            self.isCurrentStep = function (step) {
                return self.step === step;
            };

            self.setCurrentStep = function (step) {
                self.step = step;
            };

            self.getCurrentStep = function () {
                return self.steps[self.step];
            };

            self.getNextLabel = function () {
                return (self.isLastStep()) ? 'Continue' : 'Next';
            };

            self.handlePrevious = function () {
                self.step -= (self.isFirstStep()) ? 0 : 1;
            };

            self.handleNext = function () {
                if (self.isLastStep()) {

                } else {
                    self.step += 1;
                }
                var person = {email: self.email};

                if(self.hasCode == true && self.thisCode != 'agent') {
                    $http
                        .post('/api/students/getStudent', person)
                        .success(printNames);

                    $log.info('getPerson :: Starting');
                }
                else {
                    var ans= {message: {name: 'Agent'}};
                    printNames(ans);
                }
            };

            function printNames(data) {
                self.pName = data.message.name;
                self.date = new Date();
                $('.progress-striped').hide();
                $timeout(function() {
                  // Do something
                }, 2000).then(function() {
                    printDiv('certificate');
                })
            };

            function printDiv(divName) {
                 var printContents = document.getElementById(divName).innerHTML;
                 var originalContents = document.body.innerHTML;

                 document.body.innerHTML = printContents;

                 window.print();
                 var mediaQueryList = window.matchMedia('print');
                    mediaQueryList.addListener(function(mql) {
                        if (mql.matches) {
                            console.log('before print dialog open');
                        } else {
                            console.log('after print dialog closed');
                            location.reload();
                        }
                    });

                 document.body.innerHTML = originalContents;

                 //location.reload();
            };

            self.glink = $location.$$absUrl+'?email='+self.email+'&code='+self.thisCode;

            var emailData = { email: self.email, glink: self.glink, from: 'elearning' };

            if(self.hasCode == true && typeof qstring.email == 'undefined') {

                $log.info('linkEmail starting :: Starting');

                $http
                    .post('/api/email', emailData);
            }

        }]);

}(window.angular));
