;(function(angular) {
    "use strict";

    angular
        .module('distractology')
        .controller('ModuleTwoController', ['$log', '$stateParams', '$state', '$http', '$sce', function($log, $stateParams, $state, $http, $sce) {
            var self = this;
            self.steps = ['one', 'two', 'three', 'four', 'five'];
            self.step = 0;
            self.subCounter = 0;

            self.hasCode = $stateParams.hasCode;
            self.thisCode = $stateParams.thisCode;
            self.email = $stateParams.email;

            self.showContinueButton = false;
            self.modal10Home = true;
            self.subStep10A = false;
            self.subStep10B = false;
            self.subStep10C = false;

            self.subStep10Alink = false;
            self.subStep10Blink = false;
            self.subStep10Clink = false;

            self.questions = true;
            self.wrongThis = false;
            self.rightThis = false;

            self.finished = function() {
                self.showContinueButton = true;
            };

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

            self.subStepA = function () {
                self.modal10Home = false;
                self.subStep10A = true;
                self.subStep10B = false;
                self.subStep10C = false;
            };
            self.subStepB = function () {
                self.modal10Home = false;
                self.subStep10A = false;
                self.subStep10B = true;
                self.subStep10C = false;
            };
            self.subStepC = function () {
                self.modal10Home = false;
                self.subStep10A = false;
                self.subStep10B = false;
                self.subStep10C = true;
            };
            self.decideRightWrongA = function() {
                self.questions = false;
                if (self.wizard.module2_question1_a.length < 7) {
                    self.wrongThis = true;
                } else {
                    self.rightThis = true;
                }
            };
            self.getNextLabel = function () {
                return (self.isLastStep()) ? 'Continue' : 'Continue';
            };

            self.handlePrevious = function () {
                self.step -= (self.isFirstStep()) ? 0 : 1;
            };

            self.handleNext = function () {
                if (self.isLastStep()) {
                    var moduleDetails = {studentCode: self.thisCode, module: 2 };
                    if(self.hasCode == true && self.thisCode != 'agent') {
                        $http
                            .post('/api/workflows/update', moduleDetails)
                            .success(postSuccess)
                            .error(postError);

                            $log.info('WorkFlowController-Update :: Starting');
                    }

                    $state.go("elearning.module-three", {hasCode: self.hasCode, thisCode: self.thisCode, email: self.email});
                } else {
                    self.step += 1;
                    if(self.step == 1) {
                        self.showContinueButton = false;
                    }
                    if (self.getCurrentStep() == 'two') {
                        self.config = {
                            sources: [
                                {src: $sce.trustAsResourceUrl("http://arbella.media.jackmorton.net/video/2016_Arbella_Module_2BCD_v2.mp4"), type: "video/mp4"},
                                {src: $sce.trustAsResourceUrl("http://arbella.media.jackmorton.net/video/2016_Arbella_Module_2BCD_v2.ogv"), type: "video/ogg"}
                            ],
                                responsive: true,
                            theme: {
                                url:"http://www.videogular.com/styles/themes/default/latest/videogular.css",
                                            playIcon: "&#xe000;",
                                            pauseIcon: "&#xe001;",
                                            volumeLevel3Icon: "&#xe002;",
                                            volumeLevel2Icon: "&#xe003;",
                                            volumeLevel1Icon: "&#xe004;",
                                            volumeLevel0Icon: "&#xe005;",
                                            muteIcon: "&#xe006;",
                                            enterFullScreenIcon: "&#xe007;",
                                            exitFullScreenIcon: "&#xe008;"
                            },
                            plugins: {
                                poster: "http://arbella.media.jackmorton.net/video/posters/2016_Arbella_Module_2_frame1.png",
                                controls: {
                                    autoHide: true,
                                    autoHideTime: 2000
                                }
                            }
                        };
                    }
                }
            };

            function postSuccess(data) {
                $log.info('UpdateController :: update :: Success');
                $log.log(data);

            }

            function postError(data) {
                $log.info('UpdateController :: update :: Error');
                //$log.error('Error: ' + JSON.stringify(data, null, 4));
                //self.loginError = true;
            }
            if(self.getCurrentStep() == 'one') {
                self.config = {
                    sources: [
                        {src: $sce.trustAsResourceUrl("http://arbella.media.jackmorton.net/video/2016_Arbella_Module_2_v2.mp4"), type: "video/mp4"},
                        {src: $sce.trustAsResourceUrl("http://arbella.media.jackmorton.net/video/2016_Arbella_Module_2_v2.ogv"), type: "video/ogg"}
                    ],
                        responsive: true,
                    theme: {
                        url:"http://www.videogular.com/styles/themes/default/latest/videogular.css",
                                    playIcon: "&#xe000;",
                                    pauseIcon: "&#xe001;",
                                    volumeLevel3Icon: "&#xe002;",
                                    volumeLevel2Icon: "&#xe003;",
                                    volumeLevel1Icon: "&#xe004;",
                                    volumeLevel0Icon: "&#xe005;",
                                    muteIcon: "&#xe006;",
                                    enterFullScreenIcon: "&#xe007;",
                                    exitFullScreenIcon: "&#xe008;"
                    },
                    plugins: {
                        poster: "http://arbella.media.jackmorton.net/video/posters/2016_Arbella_Module_2_frame1.png",
                        controls: {
                            autoHide: true,
                            autoHideTime: 2000
                        }
                    }
                };
            }



        }]);

}(window.angular));
