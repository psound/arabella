;(function(angular) {
  "use strict";

	angular
		.module('distractology.common')
		.controller("VideoObjetController", ['$scope', function($scope) {
            scope.$on('vjsVideoReady', function (e, data) {
                  //data contains `id`, `vid`, `player` and `controlBar`
                  //NOTE: vid is depricated, use player instead
                  console.log('video id:' + data.id);
                  console.log('video.js player instance:' + data.player);
                  console.log('video.js controlBar instance:' + data.controlBar);
              });
		}])


}(window.angular));
