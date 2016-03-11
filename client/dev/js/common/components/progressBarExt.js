;(function(angular) {
  "use strict";

	angular
		.module('distractology.common')
		.controller("ProgressBarController", ['$scope', function($scope) {
			$scope.value = 10
			$scope.items = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
		}])
		.directive('progressBarExt', [function () {
			return {
				restrict: 'A',
				replace: false,
				scope: {
					'progress': '=progressBarExt'
				},
				controller: function($scope, $element, $attrs) {
					console.log("$scope.progress");
					console.log($scope.progress);
					
					$element.progressbar({
						value: $scope.progress
					})
					
					$scope.$watch(function() {
						$element.progressbar({value: $scope.progress})
					})
				}
			}
    	}]);
	
}(window.angular));