;(function(angular) {
    "use strict";

    angular
        .module('distractology')
        .controller('ModuleOneController', ['$log', '$state', '$stateParams', 'progressBarService', '$http', '$sce', function($log, $state, $stateParams, progressBarService, $http, $sce) {
            var self = this;
            self.steps = ['one'];
            self.step = 0;

            self.hasCode = $stateParams.hasCode;
            self.thisCode = $stateParams.thisCode;
            self.email = $stateParams.email;

            self.showContinueButton = false;

            $log.debug('Here');

            self.finished = function() {
                self.showContinueButton = true;
            };

            self.config = {
				sources: [
                    {src: $sce.trustAsResourceUrl("http://arbella.media.jackmorton.net/video/2016_Arbella_Module_1.mp4"), type: "video/mp4"},
                    {src: $sce.trustAsResourceUrl("http://arbella.media.jackmorton.net/video/2016_Arbella_Module_1.ogv"), type: "video/ogg"}
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
					poster: "http://arbella.media.jackmorton.net/video/posters/2016_Arbella_Module_1_frame1.png",
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
                    var moduleDetails = {studentCode: self.thisCode, module: 1 };

                    if(self.hasCode == true && self.thisCode != 'agent') {
                    $http
                        .post('/api/workflows', moduleDetails)

                        $log.info('WorkFlowController :: Starting');

                    }

                    progressBarService.value = 50;
                    $state.go("elearning.module-two", {hasCode: self.hasCode, thisCode: self.thisCode, email: self.email});
                } else {
                    self.step += 1;
                }
            };

            progressBarService.value = self.progressValue;
        }]);

}(window.angular));
