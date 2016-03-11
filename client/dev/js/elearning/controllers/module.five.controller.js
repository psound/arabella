;(function(angular) {
    "use strict";

    angular
        .module('distractology')
        .controller('ModuleFiveController', ['$log', '$stateParams', '$state', '$http', '$sce', function($log, $stateParams, $state, $http, $sce) {
            var self = this;
            self.steps = ['one', 'two', 'three'];
            self.step = 0;

            self.hasCode = $stateParams.hasCode;
            self.thisCode = $stateParams.thisCode;
            self.email = $stateParams.email;

            self.questions = true;
            self.wrongThis = false;
            self.rightThis = false;

            self.showContinueButton = false;

            self.finished = function() {
                self.showContinueButton = true;
            };

            self.config = {
				sources: [
                    {src: $sce.trustAsResourceUrl("http://arbella.media.jackmorton.net/video/2016_Arbella_Module_5.mp4"), type: "video/mp4"},
                    {src: $sce.trustAsResourceUrl("http://arbella.media.jackmorton.net/video/2016_Arbella_Module_5.ogv"), type: "video/ogg"}
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
					poster: "http://arbella.media.jackmorton.net/video/posters/2016_Arbella_Module_5_frame1.png",
                    controls: {
                        autoHide: true,
                        autoHideTime: 2000
                    }
				}
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
            self.decideRightWrongA = function() {
                self.questions = false;
                if (self.wizard.module2_question1_a.length < 2) {
                    self.wrongThis = true;
                } else {
                    self.rightThis = true;
                }
            };
            self.getCurrentStep = function () {
                return self.steps[self.step];
            };

            self.getNextLabel = function () {
                return (self.isLastStep()) ? 'Continue' : 'Continue';
            };

            self.handlePrevious = function () {
                self.step -= (self.isFirstStep()) ? 0 : 1;
            };

            self.handleNext = function () {
                if (self.isLastStep()) {
                    var moduleDetails = {studentCode: self.thisCode, module: 5 };
                    if(self.hasCode == true && self.thisCode != 'agent') {
                    $http
                        .post('/api/workflows/update', moduleDetails)

                        $log.info('WorkFlowController-Update :: Starting');
                    }
                    $state.go("elearning.module-summary", {hasCode: self.hasCode, thisCode: self.thisCode, email: self.email});
                } else {
                    self.step += 1;
                }
            };
        }]);

}(window.angular));
